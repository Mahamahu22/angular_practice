import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`http://localhost:3000/users?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            this.isAuthenticated = true;
            return true;
          }
          return false;
        })
      );
  }

  logout() { this.isAuthenticated = false; }

  getAuthStatus(): boolean { return this.isAuthenticated; }
}
