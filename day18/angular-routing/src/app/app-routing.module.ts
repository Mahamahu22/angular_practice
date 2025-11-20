import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { UsersComponent } from './users/users/users.component';
import { UsersChildComponent } from './users-child/users-child/users-child.component';
import { UserDetailComponent } from './user-detail/user-detail/user-detail.component';
import { LoginComponent } from './login/login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },

  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        resolve: { user: UserResolver },
        canDeactivate: [CanDeactivateGuard],
      },
      { path: 'child', component: UsersChildComponent }
    ]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
