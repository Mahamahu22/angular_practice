// app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule], 
  template: `
    <nav style="padding: 10px; background-color: #f0f0f0;">
      <a routerLink="">Home</a> |
      <a routerLink="crud">CRUD</a>
    </nav>
    <div style="padding: 20px;">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.css']
})
export class App {}
