package com.wastesense.request_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.wastesense.request_service.model.Notification;

@FeignClient(name = "notification-service")
public interface NotificationClient {

    @PostMapping("/notifications")
    ResponseEntity<Notification> createNotification(@RequestBody Notification notification);
}
