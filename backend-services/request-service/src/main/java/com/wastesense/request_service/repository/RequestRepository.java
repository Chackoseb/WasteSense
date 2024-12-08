package com.wastesense.request_service.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.wastesense.request_service.model.Request;

@Repository
public interface RequestRepository extends MongoRepository<Request, String> {
	List<Request> findByRequestType(String requestType);
}
