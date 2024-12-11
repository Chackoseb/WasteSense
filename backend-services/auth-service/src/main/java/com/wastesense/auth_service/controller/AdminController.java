package com.wastesense.auth_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wastesense.auth_service.dto.LoginRequest;
import com.wastesense.auth_service.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
    	return ResponseEntity.ok("Login successful");
//        boolean isAuthenticated = adminService.authenticate(request.getUsername(), request.getPassword());
//        if (isAuthenticated) {
//            return ResponseEntity.ok("Login successful");
//        }
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
