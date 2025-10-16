import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  styleUrls: ['./products.css'],
  template: `
    <div class="products-container">
      <h2>🛍 Our Products</h2>
      <div class="products-grid">
        <div class="product-card" *ngFor="let product of products" (click)="goToDetails(product)">
          <h3>{{ product.name }}</h3>
          <p>Price: ₹{{ product.price }}</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  `
})
export class ProductsComponent {
  constructor(private router: Router) {}

  products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Phone', price: 25000 },
    { id: 3, name: 'Tablet', price: 30000 }
  ];

  goToDetails(product: any) {
    this.router.navigate(['/products', product.id]);
  }
}
