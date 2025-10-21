import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form';
import { ReactiveFormComponent } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TemplateFormComponent, ReactiveFormComponent],
  template: `
    <h2> Forms (Template-Driven + Reactive)</h2>
    <hr />
    <h3>Template Driven Form</h3>
    <app-template-form></app-template-form>

    <hr />
    <h3>Reactive Form</h3>
    <app-reactive-form></app-reactive-form>
  `
})
export class AppComponent {}
