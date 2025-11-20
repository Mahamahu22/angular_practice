import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {
  constructor(private authService: FakeAuthService, private router: Router) {}

  canActivateChild(): boolean {
    if (this.authService.getAuthStatus()) {
      return true;
    }
    alert('You must log in to access child routes.');
    this.router.navigate(['/login']);
    return false;
  }
}
