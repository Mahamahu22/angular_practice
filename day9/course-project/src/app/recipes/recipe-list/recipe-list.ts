import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from '../recipe-item/recipe-item';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent],  
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();  

  recipes: Recipe[] = [
  new Recipe(
    'Masala Dosa',
    'Crispy dosa stuffed with spicy potato filling, served with chutney and sambar.',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/masala-dosa-recipe.jpg'
  ),
  new Recipe(
    'Paneer Butter Masala',
    'Soft paneer cubes cooked in a rich, creamy tomato gravy.',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala-recipe.jpg'
  ),
  new Recipe(
    'Chicken Biryani',
    'Flavorful basmati rice cooked with marinated chicken and aromatic spices.',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/chicken-biryani-recipe.jpg'
  ),
  new Recipe(
    'Veg Pulao',
    'Mixed vegetables and rice cooked together with mild spices.',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-pulao-recipe.jpg'
  ),
  new Recipe(
    'Gulab Jamun',
    'Soft fried milk balls soaked in sugar syrup — a classic Indian dessert.',
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/gulab-jamun-recipe.jpg'
  )
];


  onSelect(recipe: Recipe) {   
    this.recipeSelected.emit(recipe);
  }
}
