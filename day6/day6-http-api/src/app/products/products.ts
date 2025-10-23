import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  newProduct = { title: '', price: '', description: '' };
  loading = false;
  error = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.loading = true;
    this.error = '';
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load products.';
        this.loading = false;
      }
    });
  }

  addProduct() {
    if (!this.newProduct.title || !this.newProduct.price) return;
    this.productService.addProduct(this.newProduct).subscribe(() => {
      alert('Product added!');
      this.fetchProducts();
      this.newProduct = { title: '', price: '', description: '' };
    });
  }

  deleteProduct(id: number) {
    if (confirm('Delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        alert('Product deleted!');
        this.fetchProducts();
      });
    }
  }
}
