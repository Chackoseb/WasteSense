package com.wastesense.auth_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wastesense.auth_service.entity.Admin;
import com.wastesense.auth_service.repository.AdminRepository;
import com.wastesense.auth_service.util.PasswordUtil;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean authenticate(String username, String password) {
        Admin admin = adminRepository.findByUsername(username);
        return admin != null ;
        //&& PasswordUtil.verifyPassword(password, admin.getPassword())
    }
}