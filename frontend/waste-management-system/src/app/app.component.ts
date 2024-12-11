import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'waste-management-system';
  // role: string = 'user';
  role: string = localStorage.getItem('role') || 'user';

  logout() {
    localStorage.removeItem('role');
    this.role = 'user'; // Revert to user role
    window.location.href = '/user-home'; // Redirect to user home
  }
}
