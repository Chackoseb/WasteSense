package com.wastesense.auth.controller;
//
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wastesense.auth.model.Admin;
import com.wastesense.auth.repository.AdminRepository;
import com.wastesense.auth.service.AdminService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private AdminService adminService;
//    
    @Autowired
    private AdminRepository adminrepo;

//    @PostMapping("/login")
//    public boolean login(@RequestParam String username, @RequestParam String password) {
//        return adminService.validateCredentials(username, password);
//    }
    @GetMapping
    public List<Admin> getAll(){
    	return adminrepo.findAll();
    }
    
    @GetMapping("/login")
    public boolean login(@RequestParam String username, @RequestParam String password) {
        return adminService.validateCredentials(username, password);
    }
    
    

}