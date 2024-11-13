package com.ust.notification_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ust.notification_service.model.Notification;
import com.ust.notification_service.service.NotificationService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public List<Notification> getAllNotifications() {
        return notificationService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable String id) {
        Optional<Notification> notification = notificationService.findById(id);
        return notification.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/type/{type}")
    public List<Notification> getNotificationsByType(@PathVariable String type) {
        return notificationService.findByType(type);
    }
    
    @PostMapping
    public ResponseEntity<Notification> createNotification(@RequestBody Notification notification) {
        Notification savedNotification = notificationService.save(notification);
        return new ResponseEntity<>(savedNotification, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Notification> updateNotification(@PathVariable String id, @RequestBody Notification notification) {
        Notification updatedNotification = notificationService.update(id, notification);
        return updatedNotification != null ? ResponseEntity.ok(updatedNotification) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNotification(@PathVariable String id) {
        notificationService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
