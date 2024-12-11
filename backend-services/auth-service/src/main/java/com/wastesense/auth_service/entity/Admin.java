package com.wastesense.auth_service.entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "admins")
@Data
public class Admin {
    @Id
    private String id;
    private String username;
    private String password; // Store hashed password

}
