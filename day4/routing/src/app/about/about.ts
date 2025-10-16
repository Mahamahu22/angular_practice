import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  styleUrls: ['./about.css'],
  template: `
    <div class="about-container">
      <h2>ℹ️ About This App</h2>
      <p class="subtitle">
        This Angular demo 
      </p>

      <p class="details">
        Navigate through Home, Products, Todo, and About pages using the navbar.
        Click on a product to see details using route parameters.
      </p>
    </div>
  `
})
export class AboutComponent {}
