import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersChildModule } from '../users-child/users-child.module';
import { UserDetailModule } from '../user-detail/user-detail.module';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersChildModule,
    UserDetailModule
  ]
})
export class UsersModule { }
