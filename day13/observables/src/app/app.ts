
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataComponent],
  template: `
    <div class="container">
      <h1>Angular Observables</h1>
      <app-data></app-data>
    </div>
  `
})
export class App {}
bootstrapApplication(App);
