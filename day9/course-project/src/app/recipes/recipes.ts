import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from './recipe.model';
import { RecipeListComponent } from './recipe-list/recipe-list';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, RecipeListComponent, RecipeDetailComponent],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class RecipesComponent {
  selectedRecipe?: Recipe;

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
