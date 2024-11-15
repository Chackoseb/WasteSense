package com.ust.schedule_service.model;

import java.util.List;

import org.springframework.data.annotation.Id;


import lombok.Data;

@Data
public class Schedule {

	@Id
    private String id;

    private String scheduleId;
    private List<String> bins;
    
    private String scheduledDate;
    private String status;
}
