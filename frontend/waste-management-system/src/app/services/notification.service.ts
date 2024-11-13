import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Notification {
  id: string;
  recipientId: string;
  message: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:8888/notifications';

  constructor(private http: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.baseUrl}`);
  }

  getNotificationsByType(type: string): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.baseUrl}/type/${type}`);
  }
}
