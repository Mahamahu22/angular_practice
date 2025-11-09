import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ConfirmLeave } from '../shared/confirm-leave';

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard implements CanDeactivate<ConfirmLeave> {
  canDeactivate(component: ConfirmLeave) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
