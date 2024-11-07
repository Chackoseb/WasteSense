package com.ust.wastebin_service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ust.wastebin_service.model.Bin;

public interface BinRepository extends MongoRepository<Bin, String>{

}
