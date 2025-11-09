import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Home Page</h2>
    <p>Welcome! Use the navigation links above.</p>
    <button (click)="goToUsers()">Go to Users </button>
  `
})
export class Home {
  constructor(private router: Router) {}
  goToUsers() {
    this.router.navigate(['/users'], { queryParams: { page: 1, sort: 'name' } });
  }
}
