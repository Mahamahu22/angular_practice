import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="title">User List</h2>
    <div class="user-grid">
      <div *ngFor="let user of users" class="user-card">
        <h3>{{user.name}}</h3>
        <p>{{user.email}}</p>
      </div>
    </div>
  `
})
export class DataComponent {
  users:{id:number,name:string,email:string}[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(data => {
      this.users = [...this.users, ...data];
    });
  }
}
