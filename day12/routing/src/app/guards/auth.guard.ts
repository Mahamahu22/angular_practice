import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: FakeAuthService, private router: Router) {}

  canActivate() {
    if (this.auth.checkAuth()) return true;
    alert('Not authorized! Redirecting...');
    this.router.navigate(['/']);
    return false;
  }
}
