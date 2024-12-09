package com.wastesense.request_service.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notification {
    private String recipientId;
    private String message;
    private String type;
    private String details;
}

