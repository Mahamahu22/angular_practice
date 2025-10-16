import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.css'],
  template: `
    <div class="home-container">
      <h1>🏠 Welcome </h1>
      <p class="subtitle">
        This is the homepage 
      </p>
      <button class="explore-btn" routerLink="/products">Explore Products</button>
    </div>
  `
})
export class HomeComponent {}
