package com.ust.notification_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.notification_service.model.Notification;
import com.ust.notification_service.repository.NotificationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<Notification> findAll() {
        return notificationRepository.findAll();
    }

    public Optional<Notification> findById(String id) {
        return notificationRepository.findById(id);
    }

    public Notification save(Notification notification) {
        return notificationRepository.save(notification);
    }

    public void deleteById(String id) {
        notificationRepository.deleteById(id);
    }

    public Notification update(String id, Notification newNotification) {
        return notificationRepository.findById(id)
                .map(notification -> {
                    notification.setRecipientId(newNotification.getRecipientId());
                    notification.setMessage(newNotification.getMessage());
                    notification.setType(newNotification.getType());
                    return notificationRepository.save(notification);
                })
                .orElse(null);
    }
    
    public List<Notification> findByType(String type) {
        return notificationRepository.findByType(type);
    }
}
