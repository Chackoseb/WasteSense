package com.ust.data_ingestion_service.service;

import java.util.HashMap;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ust.data_ingestion_service.client.NotificationClient;
import com.ust.data_ingestion_service.client.WastebinClient;
import com.ust.data_ingestion_service.model.Bin;
import com.ust.data_ingestion_service.model.NotificationDTO;
import com.ust.data_ingestion_service.model.ThinkSpeakResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Service
public class DataIngestionService {

	private static final Logger logger = LogManager.getLogger(DataIngestionService.class);
	
    @Autowired
    private WastebinClient wastebinClient;
    
    @Autowired
    private NotificationClient notificationClient;
    
    @Autowired
    private JavaMailSender mailSender;
    
    private final RestTemplate restTemplate = new RestTemplate();

    private final Map<String, String> binApiUrls = new HashMap<>();
    private final Map<String, Double> lastFillLevels = new HashMap<>();

    public DataIngestionService() {
        binApiUrls.put("tvm-cntl-station-RW", "https://api.thingspeak.com/channels/2737751/fields/1.json?api_key=PQMS975QRQ9UG6GO&results=1");
        binApiUrls.put("greenfield-stadium-RW", "https://api.thingspeak.com/channels/2737899/fields/1.json?api_key=FSVMVYEUDO0GLGMX&results=1");
        binApiUrls.put("CET-RW", "https://api.thingspeak.com/channels/2737903/fields/1.json?api_key=1E63ITIBTFY0KQBO&results=1");
        binApiUrls.put("Veli-Lake-Village-RW", "https://api.thingspeak.com/channels/2737905/fields/1.json?api_key=K8VS31ISYOEI1NVF&results=1");
    }

    @Scheduled(fixedRate = 1000) // Poll every 1 second
    public void pollThinkSpeakForBinData() {
        for (Map.Entry<String, String> entry : binApiUrls.entrySet()) {
            String binId = entry.getKey();
            String apiUrl = entry.getValue();
            
            Double newFillLevel = fetchLatestFillLevelFromThinkSpeak(apiUrl);
            
            if (newFillLevel != null && hasFillLevelChanged(binId, newFillLevel)) {
                updateBinFillLevel(binId, newFillLevel);
                lastFillLevels.put(binId, newFillLevel);
                
                if (newFillLevel > 90) {
                    sendAlertEmail(binId, newFillLevel);
                    notifyAdmin(binId, newFillLevel);
                }
               
            }
        }
    }

    private Double fetchLatestFillLevelFromThinkSpeak(String apiUrl) {
        try {
            ThinkSpeakResponse response = restTemplate.getForObject(apiUrl, ThinkSpeakResponse.class);
            if (response != null && !response.getFeeds().isEmpty()) {
                return response.getFeeds().get(0).getField1(); // Assuming field1 represents fill level
            }
        } catch (Exception e) {
            System.out.println("Failed to fetch data from ThinkSpeak: " + e.getMessage());
        }
        return null;
    }

    private boolean hasFillLevelChanged(String binId, Double newFillLevel) {
        return !newFillLevel.equals(lastFillLevels.get(binId));
    }

    public Bin updateBinFillLevel(String binId, Double fillLevel) {
        ResponseEntity<Bin> response = wastebinClient.updateFillLevel(binId, fillLevel);
        return response.getBody();
    }
    
    private void sendAlertEmail(String binId, Double fillLevel) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("chackochansebastian29@gmail.com");
            message.setSubject("Bin Alert: High Fill Level Detected");
            message.setText("Alert: The fill level of bin " + binId + " has reached " + fillLevel + "%. Please take necessary action.");

            mailSender.send(message);
//            System.out.println("Alert email sent successfully for bin " + binId);
            logger.info("Alert email sent successfully for bin {}", binId);
        } catch (Exception e) {
//            System.out.println("Failed to send alert email: " + e.getMessage());
        	logger.error("Failed to send alert email: {}", e.getMessage(), e);
        }
    }
    
    private void notifyAdmin(String binId,Double newFillLevel) {
        String type;
        String message;
        String details;
        LocalDateTime currentTime = LocalDateTime.now();
        String formattedTime = currentTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")); 

        type = "bin";
        message = "The fill level of bin: " + binId + " has reached " + newFillLevel + " percent. Take necessary action.";
        details = "Time: " + formattedTime + "\n\t BinId: " + binId + "\n\t Fill Level: "+ newFillLevel;

        NotificationDTO notification = new NotificationDTO("admin", message, type, details);
        notificationClient.createNotification(notification);
    }
    
    
}
