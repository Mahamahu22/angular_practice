import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: FakeAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getAuthStatus()) {
      return true;
    }
    alert('You must log in to access this page.');
    this.router.navigate(['/login']);
    return false;
  }
}
