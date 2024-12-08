package com.wastesense.request_service.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wastesense.request_service.model.Request;
import com.wastesense.request_service.repository.RequestRepository;

import java.util.List;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request getRequestById(String id) {
        return requestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Request not found with id: " + id));
    }

    public Request createRequest(Request request) {
        return requestRepository.save(request);
    }

    public void deleteRequest(String id) {
        if (!requestRepository.existsById(id)) {
            throw new RuntimeException("Request not found with id: " + id);
        }
        requestRepository.deleteById(id);
    }
    
    public List<Request> getRequestsByType(String requestType) {
        return requestRepository.findByRequestType(requestType);
    }

}