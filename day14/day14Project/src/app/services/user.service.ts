import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  id?: string; 
  name: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  
  loadUsers(): void {
    this.http.get<User[]>(this.apiUrl)
      .subscribe(users => this.usersSubject.next(users));
  }

  
  addUser(user: User): Observable<User> {
    const userToSend = { ...user };
    const currentUsers = this.usersSubject.getValue();
    const maxId = currentUsers.length
      ? Math.max(...currentUsers.map(u => Number(u.id))) 
      : 0;
    userToSend.id = (maxId + 1).toString(); 
    return this.http.post<User>(this.apiUrl, userToSend)
      .pipe(tap(() => this.loadUsers()));
  }

  
  updateUser(user: User): Observable<User> {
    if (!user.id) throw new Error('User ID is required for update');
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user)
      .pipe(tap(() => this.loadUsers()));
  }

  
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(tap(() => this.loadUsers()));
  }
}
