import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css'
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;   
}
