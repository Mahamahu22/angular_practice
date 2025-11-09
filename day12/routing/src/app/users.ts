import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';
import { NgFor, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor, JsonPipe],
  template: `
    <h2>Users Page</h2>
   
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="[user.id]" [queryParams]="{ ref: 'list' }">
          {{ user.name }}
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class Users implements OnInit {
  users: any[] = [];
  query: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.route.queryParams.subscribe(params => (this.query = params));
  }
}
