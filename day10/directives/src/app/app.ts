import { Component } from '@angular/core';
import {
  NgFor, NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault
} from '@angular/common';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { HostBindingDirective } from './directives/hostbinding.directive';
import { UnlessDirective } from './directives/structural.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor, NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault,
    BasicHighlightDirective, BetterHighlightDirective, HostBindingDirective, UnlessDirective
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  colors = ['Red', 'Green', 'Blue'];
  show = true;
  bgColor = 'teal';
  isActive = true;
  color = 'red';

  toggle() {
    this.show = !this.show;
  }

  changeColor() {
    this.bgColor = this.bgColor === 'teal' ? 'purple' : 'teal';
  }

  switchColor() {
    this.color = this.color === 'red' ? 'green' : 'red';
  }
}
