package com.wastesense.auth.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wastesense.auth.model.Admin;

import java.util.Optional;

public interface AdminRepository extends MongoRepository<Admin, String> {
    Optional<Admin> findByUsername(String username);
}