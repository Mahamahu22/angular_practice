import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeavyComponent } from './heavy/heavy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeavyComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
