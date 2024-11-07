package com.ust.data_ingestion_service.client;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ust.data_ingestion_service.model.Bin;

@FeignClient(name = "wastebin-service")
public interface WastebinClient {
    
    @PutMapping(value = "/bins/update-fill-level/{binId}")
    ResponseEntity<Bin> updateFillLevel(@PathVariable("binId") String binId, @RequestParam("fillLevel") Double fillLevel);

}

