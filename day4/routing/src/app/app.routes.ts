import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductsComponent } from './products/products';

import { TodoComponent } from './todo/todo';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'todo', component: TodoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
