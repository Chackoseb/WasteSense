package com.wastesense.auth.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "admins")
public class Admin {
    @Id
    private String id;
    private String username;
    private String password; // This will store the BCrypted password
}
