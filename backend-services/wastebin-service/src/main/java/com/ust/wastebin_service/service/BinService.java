package com.ust.wastebin_service.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.wastebin_service.model.Bin;
import com.ust.wastebin_service.repository.BinRepository;

@Service
public class BinService {
	
	@Autowired
    private final BinRepository binRepository;
    
    public BinService(BinRepository binRepository) {
        this.binRepository = binRepository;
    }

    public List<Bin> getAllBins() {
        return binRepository.findAll();
    }

    public Bin getBinById(String id) {
        return binRepository.findById(id).orElse(null);
    }

    public Bin createBin(Bin bin) {
        return binRepository.save(bin);
    }

    public Bin updateBin(String id, Bin binDetails) {
        Bin bin = getBinById(id);
        if (bin != null) {
            bin.setBinId(binDetails.getBinId());
            bin.setLocation(binDetails.getLocation());
            bin.setAddress(binDetails.getAddress());
            bin.setFillLevel(binDetails.getFillLevel());
            bin.setType(binDetails.getType());
            bin.setAlerts(binDetails.getAlerts());
            return binRepository.save(bin);
        }
        return null;
    }

    public void deleteBin(String id) {
        binRepository.deleteById(id);
    }
    
    public List<Bin> getBinsRequiringImmediateAction(Double threshold) {
        return binRepository.findAll().stream()
                .filter(bin -> bin.getFillLevel() != null && bin.getFillLevel() >= threshold)
                .collect(Collectors.toList());
    }
    
    public Bin getBinByBinId(String binId) {
        return binRepository.findAll().stream()
                .filter(bin -> bin.getBinId().equals(binId))
                .findFirst()
                .orElse(null);
    }
}
