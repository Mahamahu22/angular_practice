import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unique.html',
  styleUrl: './unique.css'
})
export class UniqueComponent {
  info = 'This is a standalone unique component.';
}
