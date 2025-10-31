import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css'
})
export class ShoppingEditComponent {
  name = '';
  amount: number = 0;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  addItem() {
    const newIngredient = new Ingredient(this.name, this.amount);
    this.ingredientAdded.emit(newIngredient);
    this.name = '';
    this.amount = 0;
  }
}
