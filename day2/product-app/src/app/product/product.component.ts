import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;
  @Output() toggle = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  toggleStatus() {
    this.toggle.emit();
  }

  deleteProduct() {
    this.remove.emit();
  }
}
