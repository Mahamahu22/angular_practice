import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { RecipesComponent } from './recipes/recipes';
import { ShoppingListComponent } from './shopping-list/shopping-list';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RecipesComponent, ShoppingListComponent, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
