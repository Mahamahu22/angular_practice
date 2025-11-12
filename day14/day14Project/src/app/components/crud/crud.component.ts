import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService, User } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  users$: Observable<User[]>;
  userForm: FormGroup;
  editMode = false;
  editUserId: string | null = null; 

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.users$ = this.userService.users$;
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  submit() {
    const user: User = this.userForm.value;
    if (this.editMode && this.editUserId !== null) {
      user.id = this.editUserId; 
      this.userService.updateUser(user).subscribe(() => this.resetForm());
    } else {
      this.userService.addUser(user).subscribe(() => this.resetForm());
    }
  }

  edit(user: User) {
    this.editMode = true;
    this.editUserId = user.id!; 
    this.userForm.patchValue({
      name: user.name,
      address: user.address
    });
  }

  delete(id: string) {
    this.userService.deleteUser(id).subscribe();
  }

  resetForm() {
    this.userForm.reset();
    this.editMode = false;
    this.editUserId = null;
  }
}
