import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      { name: 'Laptop', price: 55000, available: true },
      { name: 'Mobile', price: 25000, available: false },
      { name: 'Tablet', price: 32000, available: true }
    ];
  }
}
