import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

interface Notification {
  // id: string;
  recipientId: string;
  message: string;
  type: string;
  details: string;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  filteredNotifications: Notification[] = [];
  showNotification: number = 0;

  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 5;
  paginatedNotifications: Notification[] = [];
  filteredNotificationsForAdmin: Notification[] = [];

  selectedType: string = 'all';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.fetchNotifications();
  }

  fetchNotifications(): void {
    if (this.selectedType === 'all') {
      this.notificationService.getAllNotifications().subscribe((data) => {
        this.notifications = data;
        this.filteredNotifications = data.reverse();
        this.updatePaginatedNotifications();
      });
    } else {
      this.notificationService
        .getNotificationsByType(this.selectedType)
        .subscribe((data) => {
          this.notifications = data;
          this.filteredNotifications = data.reverse();
          this.updatePaginatedNotifications();
        });
    }
  }

  onFilterChange(event: Event): void {
    const type = (event.target as HTMLSelectElement).value;
    this.selectedType = type;
    this.fetchNotifications();
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

  selectedNotificationIndex: number | null = null;

  toggleNotificationDetails(index: number): void {
    this.selectedNotificationIndex = this.selectedNotificationIndex === index ? null : index;
  }

  filteredNotificationsforAdmin = this.paginatedNotifications.filter(
    notification => notification.recipientId === 'admin'
  );
  
}
