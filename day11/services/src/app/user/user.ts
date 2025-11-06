import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { EnhancedDataService } from '../enhanced-data.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  users: string[] = [];

  constructor(private dataService: DataService, private enhancedData: EnhancedDataService) {
    this.users = this.dataService.getUsers();
  }

  get count() {
    return this.enhancedData.getUserCount();
  }
}
