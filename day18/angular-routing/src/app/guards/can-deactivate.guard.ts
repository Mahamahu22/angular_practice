import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail/user-detail.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<UserDetailComponent> {
  canDeactivate(component: UserDetailComponent): boolean {
    return confirm('Do you want to leave this page? Unsaved changes might be lost.');
  }
}
