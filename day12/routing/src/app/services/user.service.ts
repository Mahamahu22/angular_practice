import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users = [
    { id: 1, name: 'Maha' },
    { id: 2, name: 'Lakshmi' },
    { id: 3, name: 'Charlie' }
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(u => u.id === id);
  }
}
