package com.wastesense.request_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wastesense.request_service.model.Request;
import com.wastesense.request_service.service.RequestService;

import java.util.List;

@RestController
@RequestMapping("/requests")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @GetMapping
    public List<Request> getAllRequests() {
        return requestService.getAllRequests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Request> getRequestById(@PathVariable String id) {
        return ResponseEntity.ok(requestService.getRequestById(id));
    }

    @PostMapping
    public ResponseEntity<Request> createRequest(@RequestBody Request request) {
        return ResponseEntity.ok(requestService.createRequest(request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRequest(@PathVariable String id) {
        requestService.deleteRequest(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/type/{requestType}")
    public ResponseEntity<List<Request>> getRequestsByType(@PathVariable String requestType) {
        return ResponseEntity.ok(requestService.getRequestsByType(requestType));
    }

}
