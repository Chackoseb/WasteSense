package com.ust.schedule_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ust.schedule_service.model.NotificationDTO;

@FeignClient(name = "notification-service")
public interface NotificationClient {

    @PostMapping("/notifications")
    ResponseEntity<NotificationDTO> createNotification(@RequestBody NotificationDTO notification);
}

