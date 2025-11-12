import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: '**', redirectTo: '' }
];

