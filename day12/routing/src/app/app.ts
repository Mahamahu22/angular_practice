import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FakeAuthService } from './services/fake-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>Angular Routing</h1>

    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a> |
      <a routerLink="/about" routerLinkActive="active">About</a> |
      <a routerLink="/users" routerLinkActive="active">Users</a>
    </nav>

    <button (click)="toggleAuth()">Login</button>
    <p>Currently Logged In: {{ auth.checkAuth() }}</p>

    <hr>

    <router-outlet></router-outlet>
  `,
  styles: [`
    nav a.active { font-weight: bold; color: darkblue; }
    nav a { margin-right: 10px; }
    button { margin-top: 10px; padding: 5px 10px; }
  `]
})
export class App {
  constructor(public auth: FakeAuthService) {}

  toggleAuth() {
    this.auth.toggleAuth();
  }
}
