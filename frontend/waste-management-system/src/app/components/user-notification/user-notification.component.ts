
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

interface Notification {
  recipientId: string;
  message: string;
  type: string;
  details: string;
}

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css'],
})
export class UserNotificationComponent implements OnInit {
  notifications: Notification[] = [];
  filteredNotifications: Notification[] = [];
  paginatedNotifications: Notification[] = [];

  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 5;

  selectedNotificationIndex: number | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.fetchNotifications();
  }

  fetchNotifications(): void {
    this.notificationService.getAllNotifications().subscribe((data) => {
      // Filter only 'schedule' notifications
      this.notifications = data.filter((notification) => notification.type === 'schedule');
      this.filteredNotifications = this.notifications.reverse();
      this.updatePaginatedNotifications();
    });
  }

  get totalPages(): number {
    return Math.ceil(this.filteredNotifications.length / this.itemsPerPage);
  }

  // Update the paginated list based on the current page
  updatePaginatedNotifications(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedNotifications = this.filteredNotifications.slice(start, end);
  }

  // Handle page change
  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedNotifications();
  }

  toggleNotificationDetails(index: number): void {
    this.selectedNotificationIndex = this.selectedNotificationIndex === index ? null : index;
  }
}
