package com.wastesense.request_service.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wastesense.request_service.client.NotificationClient;
import com.wastesense.request_service.model.Notification;
import com.wastesense.request_service.model.Request;
import com.wastesense.request_service.repository.RequestRepository;

import java.util.List;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;
    
    @Autowired
    private NotificationClient notificationClient;

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request getRequestById(String id) {
        return requestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Request not found with id: " + id));
    }

    public Request createRequest(Request request) {
    	Request savedRequest = requestRepository.save(request);
        notifyAdmin(request);
        return savedRequest;
    }

    public void deleteRequest(String id) {
        if (!requestRepository.existsById(id)) {
            throw new RuntimeException("Request not found with id: " + id);
        }
        requestRepository.deleteById(id);
    }
    
    public List<Request> getRequestsByType(String requestType) {
        return requestRepository.findByRequestType(requestType);
    }

    private void notifyAdmin(Request request) {
        String type;
        String message;
        String details;

        switch (request.getRequestType()) {
            case "BIN_REQUEST":
                type = "new-bin-request";
                message = "A new bin request has been created at " + request.getAddress().getStreet() + ", " +
                        request.getAddress().getCity();
                details = "Email: " + request.getEmail() + "\n\t Street: " + request.getAddress().getStreet() +
                		"\n\t City: " + request.getAddress().getCity() + "\n\t State: "+
                		request.getAddress().getState() + "\n\t ZipCode: "+ request.getAddress().getZipCode() +
                		"\n\t Description: " + request.getDescription();
                break;
            case "BULK_COLLECTION":
                type = "service";
                message = "A bulk waste collection request for " + request.getQuantity() +
                		" kg of items has been created.";
                details = "Phone No: "+ request.getPhone() + "\n\t Email: " + request.getEmail() + "\n\t Street: " +
                		request.getAddress().getStreet() + "\n\t City: " + request.getAddress().getCity() +
                		"\n\t State: "+ request.getAddress().getState() + "\n\t ZipCode: "+
                		request.getAddress().getZipCode() + "\n\t Quantity(kg): " + request.getQuantity() +
                		"\n\t Description: " + request.getDescription();
                break;
            case "COMPLAINT":
                type = "complaint";
                message = "A new complaint has been registered: " + request.getSubject();
                details = "Phone No: "+ request.getPhone() + "\n\t Email: " + request.getEmail() +
                		"\n\t Subject: " + request.getSubject()+"\n\t Description: " + request.getDescription();
                break;
            default:
                type = "general";
                message = "A new request has been created.";
                details = "No details to show";
        }

        Notification notification = new Notification("admin", message, type, details);
        notificationClient.createNotification(notification);
    }
}