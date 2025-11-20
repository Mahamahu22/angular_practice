import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FakeAuthService } from '../../services/fake-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: FakeAuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/home']); // go to home after login
      } else {
        this.error = 'Invalid username or password';
      }
    });
  }
}
