import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css']
})
export class ReactiveFormComponent {
  productForm;
  products: any[] = [];
  formSubmitted = false; 

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.formSubmitted = true; 

    if (this.productForm.valid) {
      this.products.push(this.productForm.value);
      this.productForm.reset();
      this.formSubmitted = false; 
    }
  }
}
