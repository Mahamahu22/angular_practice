import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FakeAuthService {
  private isLoggedIn = true;

  checkAuth() {
    return this.isLoggedIn;
  }

  toggleAuth() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
