package com.wastesense.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wastesense.auth.model.Admin;
import com.wastesense.auth.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;


    public boolean validateCredentials(String username, String password) {
        Optional<Admin> adminOptional =  adminRepository.findByUsername(username);
        if(adminOptional.isPresent()) {
        	String pass = adminOptional.get().getPassword();
            return pass.equals(password);
        }
        return false;
        
    }
}