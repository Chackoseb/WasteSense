package com.ust.data_ingestion_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ust.data_ingestion_service.client.WastebinClient;
import com.ust.data_ingestion_service.model.Bin;

@Service
public class DataIngestionService {

    @Autowired
    private WastebinClient wastebinClient;
    
    public Bin updateBinFillLevel(String binId, Double fillLevel) {
        ResponseEntity<Bin> response = wastebinClient.updateFillLevel(binId, fillLevel);
        return response.getBody();
    }
}
