import { Component } from '@angular/core';

@Component({
  selector: 'app-users-child',
  standalone: true,
  template: `<p>This is a nested (child) route under Users!</p>`
})
export class UsersChild {}
