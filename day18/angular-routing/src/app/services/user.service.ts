import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Maha N', email: 'maha@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  getUsers(): Observable<User[]> { return of(this.users); }
  getUser(id: number): Observable<User | undefined> {
    return of(this.users.find(u => u.id === id));
  }
}
