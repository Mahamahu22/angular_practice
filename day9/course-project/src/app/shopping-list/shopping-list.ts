import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent, NgFor],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
