import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetailComponent {
  @Input() recipe?: Recipe;
}
