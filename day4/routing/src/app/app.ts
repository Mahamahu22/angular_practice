import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav style="background:#1976d2;padding:10px;color:white;">
      <a routerLink="/" routerLinkActive="active" style="margin-right:15px;color:white;">Home</a>
      <a routerLink="/products" routerLinkActive="active" style="margin-right:15px;color:white;">Products</a>
      <a routerLink="/todo" routerLinkActive="active" style="margin-right:15px;color:white;">Todo</a>
      <a routerLink="/about" routerLinkActive="active" style="color:white;">About</a>
    </nav>

    <div style="margin:20px;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
