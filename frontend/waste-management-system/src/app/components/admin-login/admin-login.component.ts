import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  // login() {
  //   const validUsername = 'admin';
  //   const validPassword = 'admin123';

  //   if (this.username === validUsername && this.password === validPassword) {
  //     alert('Login successful!');
  //     // Redirect to admin dashboard or set admin role
  //     localStorage.setItem('role', 'admin'); // Example: Store role in localStorage
  //     window.location.href = '/citymap'; // Redirect to admin-specific page
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }

  // login() {
  //   this.http.post<boolean>('http://localhost:8031/api/auth/login', null, {
  //     params: {
  //       username: this.username,
  //       password: this.password
  //     }
  //   }).subscribe(
  //     (response) => {
  //       if (response) {
  //         alert('Login successful!');
  //         localStorage.setItem('role', 'admin');
  //         window.location.href = '/citymap';
  //       } else {
  //         alert('Invalid credentials');
  //       }
  //     },
  //     (error) => {
  //       alert('An error occurred during login');
  //     }
  //   );
  // }

  login() {
    this.http.get<boolean>('http://localhost:8031/api/auth/login', {
      params: {
        username: this.username,
        password: this.password
      }
    }).subscribe(
      (response) => {
        if (response) {
          alert('Login successful!');
          localStorage.setItem('role', 'admin');
          window.location.href = '/citymap';
        } else {
          alert('Invalid credentials');
        }
      },
      (error) => {
        alert('An error occurred during login');
      }
    );
  }
}
