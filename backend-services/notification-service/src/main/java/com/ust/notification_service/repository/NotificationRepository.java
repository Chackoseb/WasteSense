package com.ust.notification_service.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ust.notification_service.model.Notification;

public interface NotificationRepository extends MongoRepository<Notification, String>{
	List<Notification> findByType(String type);

}
