package com.ust.schedule_service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ust.schedule_service.model.Schedule;

import java.util.Optional;

public interface ScheduleRepository extends MongoRepository<Schedule, String> {
    Optional<Schedule> findByScheduleId(String scheduleId);
}
