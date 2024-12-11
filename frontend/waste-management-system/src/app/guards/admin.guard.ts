import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdmin = localStorage.getItem('role') === 'admin';
    if (!isAdmin) {
      alert('Access denied. Admins only.');
      this.router.navigate(['/user-home']);
      return false;
    }
    return true;
  }
}

