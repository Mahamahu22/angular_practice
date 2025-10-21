import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateFormComponent {
  product = { name: '', price: null as number | null, category: '' };
  products: any[] = [];

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.products.push({ ...this.product });
      form.resetForm();
    }
  }
}
