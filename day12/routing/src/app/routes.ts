import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { Users } from './users';
import { UserDetail } from './user-detail';
import { UsersChild } from './users-child';
import { NotFound } from './not-found';
import { AuthGuard } from './guards/auth.guard';
import { AuthChildGuard } from './guards/auth-child.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { UserResolver } from './resolvers/user.resolver';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  {
    path: 'users',
    component: Users,
    canActivate: [AuthGuard],
    canActivateChild: [AuthChildGuard],
    children: [
      { path: ':id', component: UserDetail, resolve: { user: UserResolver }, canDeactivate: [CanDeactivateGuard] },
      { path: 'child', component: UsersChild }
    ]
  },
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: '/not-found' }
];
