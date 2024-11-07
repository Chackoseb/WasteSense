package com.ust.wastebin_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class WastebinServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(WastebinServiceApplication.class, args);
	}

}
