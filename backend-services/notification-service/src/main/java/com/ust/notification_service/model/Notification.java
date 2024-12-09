package com.ust.notification_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "notifications")
public class Notification {

	@Id
    private String id;

    private String recipientId;
    private String message;
    private String type;
    private String details;
}
