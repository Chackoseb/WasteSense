package com.ust.schedule_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.schedule_service.client.NotificationClient;
import com.ust.schedule_service.exception.ScheduleNotFoundException;
import com.ust.schedule_service.model.NotificationDTO;
import com.ust.schedule_service.model.Schedule;
import com.ust.schedule_service.repository.ScheduleRepository;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;
    
    @Autowired
    private NotificationClient notificationClient;

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public Schedule getScheduleById(String id) {
        return scheduleRepository.findById(id).orElseThrow(() -> new ScheduleNotFoundException("Schedule not found"));
    }

    public Schedule createSchedule(Schedule schedule) {
        Schedule savedSchedule = scheduleRepository.save(schedule);
        notifyUser(schedule);
        return savedSchedule;
    }

    public Schedule updateSchedule(String id, Schedule updatedSchedule) {
        Schedule existingSchedule = getScheduleById(id);
        existingSchedule.setScheduleId(updatedSchedule.getScheduleId());
        existingSchedule.setBins(updatedSchedule.getBins());
        existingSchedule.setScheduledDate(updatedSchedule.getScheduledDate());
        existingSchedule.setStatus(updatedSchedule.getStatus());
        return scheduleRepository.save(existingSchedule);
    }

    public void deleteSchedule(String id) {
        scheduleRepository.deleteById(id);
    }
    
    public void notifyUser(Schedule schedule) {
    	String type;
        String message;
        String details;

        type = "schedule";
        message = "A bin collection is scheduled on " + schedule.getScheduledDate();
        details = "Bins to be collected: " + schedule.getBins();

        NotificationDTO notification = new NotificationDTO("user", message, type, details);
        notificationClient.createNotification(notification);
    }
}

