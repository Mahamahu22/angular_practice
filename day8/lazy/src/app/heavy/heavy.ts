import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="heavy-box">
      <h2>Heavy Component Loaded </h2>
      <p>This content was loaded using <code>&#64;defer (on viewport)</code>.</p>
    </div>
  `,
  styles: [`
    .heavy-box {
      padding: 20px;
      background: #f0f0f0;
      border-radius: 10px;
      text-align: center;
      font-family: Arial, sans-serif;
    }
  `]
})
export class HeavyComponent {}
