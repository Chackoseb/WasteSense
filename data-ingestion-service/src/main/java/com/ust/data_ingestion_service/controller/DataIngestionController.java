package com.ust.data_ingestion_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ust.data_ingestion_service.service.DataIngestionService;

@RestController
@RequestMapping("/ingest")
public class DataIngestionController {

    @Autowired
    private DataIngestionService dataIngestionService;

    @PostMapping("/update-bin/{binId}")
    public ResponseEntity<String> updateBin(@PathVariable String binId, @RequestParam Double fillLevel) {
        dataIngestionService.updateBinFillLevel(binId, fillLevel);
        return ResponseEntity.ok("Fill level update initiated for binId: " + binId);
    }
}

