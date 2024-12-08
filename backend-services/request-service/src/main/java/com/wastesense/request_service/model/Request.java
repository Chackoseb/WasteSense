package com.wastesense.request_service.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "requests")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Request {

    @Id
    private String id; 

    private String email;
    private Address address;
    private String phone;

    private String requestType; // "BIN_REQUEST", "BULK_COLLECTION", "COMPLAINT"

    // Fields specific to Bulk Collection
    private Integer quantity; // Quantity of waste
    private String description; // Description of waste

    // Fields specific to Complaint
    private String subject; // Complaint subject
    private String complaintDescription; // Detailed complaint description
    private String status; // Complaint status, e.g., "OPEN", "CLOSED"

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Address {
        private String street;
        private String city;
        private String state;
        private String zipCode;
    }
}