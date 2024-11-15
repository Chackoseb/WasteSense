package com.ust.schedule_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.schedule_service.exception.ScheduleNotFoundException;
import com.ust.schedule_service.model.Schedule;
import com.ust.schedule_service.repository.ScheduleRepository;

import java.util.List;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public Schedule getScheduleById(String id) {
        return scheduleRepository.findById(id).orElseThrow(() -> new ScheduleNotFoundException("Schedule not found"));
    }

    public Schedule createSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public Schedule updateSchedule(String id, Schedule updatedSchedule) {
        Schedule existingSchedule = getScheduleById(id);
        existingSchedule.setScheduleId(updatedSchedule.getScheduleId());
        existingSchedule.setBins(updatedSchedule.getBins());
        existingSchedule.setScheduledDate(updatedSchedule.getScheduledDate());
        existingSchedule.setStatus(updatedSchedule.getStatus());
        return scheduleRepository.save(existingSchedule);
    }

    public void deleteSchedule(String id) {
        scheduleRepository.deleteById(id);
    }
}

