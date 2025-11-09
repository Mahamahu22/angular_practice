import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthChildGuard implements CanActivateChild {
  constructor(private auth: FakeAuthService) {}
  canActivateChild() {
    return this.auth.checkAuth();
  }
}
