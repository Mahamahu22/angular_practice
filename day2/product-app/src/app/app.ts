import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Product Dashboard';
  products = signal<any[]>([]);

  constructor(private productService: ProductService) {
    this.products.set(this.productService.getProducts());
  }

  addProduct() {
    const newProduct = { name: 'Headphones', price: 3500, available: true };
    this.products.update(list => [...list, newProduct]);
  }

  toggleAvailability(index: number) {
    const updated = this.products().map((p, i) =>
      i === index ? { ...p, available: !p.available } : p
    );
    this.products.set(updated);
  }

  removeProduct(index: number) {
    this.products.set(this.products().filter((_, i) => i !== index));
  }
}
