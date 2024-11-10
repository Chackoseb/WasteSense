package com.ust.wastebin_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ust.wastebin_service.model.Bin;
import com.ust.wastebin_service.service.BinService;

import java.util.List;

@RestController
@RequestMapping("/bins")
@CrossOrigin
public class BinController {
    @Autowired
    private final BinService binService;


    public BinController(BinService binService) {
        this.binService = binService;
    }

    @GetMapping
    public List<Bin> getAllBins() {
        return binService.getAllBins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bin> getBinById(@PathVariable String id) {
        Bin bin = binService.getBinById(id);
        return bin != null ? ResponseEntity.ok(bin) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Bin createBin(@RequestBody Bin bin) {
        return binService.createBin(bin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bin> updateBin(@PathVariable String id, @RequestBody Bin binDetails) {
        Bin updatedBin = binService.updateBin(id, binDetails);
        return updatedBin != null ? ResponseEntity.ok(updatedBin) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBin(@PathVariable String id) {
        binService.deleteBin(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/immediate-action")
    public List<Bin> getBinsRequiringImmediateAction(@RequestParam(defaultValue = "0.8") Double threshold) {
        return binService.getBinsRequiringImmediateAction(threshold);
    }
    
    
    @PutMapping("/update-fill-level/{binId}")
    public ResponseEntity<Bin> updateBinFillLevel(@PathVariable String binId, @RequestParam Double fillLevel) {
            Bin bin = binService.getBinByBinId(binId);
            if (bin != null) {
                bin.setFillLevel(fillLevel);
                Bin updatedBin = binService.updateBin(bin.getId(), bin);
                return ResponseEntity.ok(updatedBin);
            }
            return ResponseEntity.notFound().build();
        
    }
}

