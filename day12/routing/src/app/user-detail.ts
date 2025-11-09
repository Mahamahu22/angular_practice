import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmLeave } from './shared/confirm-leave';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  template: `
    <h3>User Detail</h3>
    <p *ngIf="user">ID: {{ user.id }} | Name: {{ user.name }}</p>
    <label>
      Edit name: <input [(ngModel)]="user.name" />
    </label>
  `
})
export class UserDetail implements ConfirmLeave {
  user: any;
  originalName = '';

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.user = data['user'];
      this.originalName = this.user?.name;
    });
  }

  canDeactivate() {
    return this.user.name === this.originalName
      ? true
      : confirm('You have unsaved changes. Leave anyway?');
  }
}
