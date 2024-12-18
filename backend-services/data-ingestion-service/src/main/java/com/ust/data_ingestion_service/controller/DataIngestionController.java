package com.ust.data_ingestion_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ust.data_ingestion_service.model.Bin;
import com.ust.data_ingestion_service.service.DataIngestionService;

@RestController
@CrossOrigin
@RequestMapping("/ingest")
public class DataIngestionController {

    @Autowired
    private DataIngestionService dataIngestionService;
    
    @PostMapping("/update-bin/{binId}")
    public ResponseEntity<Bin> updateBin(@PathVariable String binId, @RequestParam Double fillLevel) {
        Bin updatedBin = dataIngestionService.updateBinFillLevel(binId, fillLevel);
        if (updatedBin != null) {
            return ResponseEntity.ok(updatedBin);
        } else {
            return ResponseEntity.status(500).body(null);
        }
    }
}

