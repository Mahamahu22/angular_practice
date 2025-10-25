import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { forkJoin, switchMap } from 'rxjs';

interface Todo {
  id: number;
  title: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  comments: any[] = [];
  todo?: Todo;
  userName: string = '';
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getParallelData();
  }

  
  getParallelData() {
    this.loading = true;
    forkJoin({
      posts: this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts'),
      comments: this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
    }).subscribe((res) => {
      this.posts = res.posts;
      this.comments = res.comments;
      this.loading = false;
    });
  }

  
  getSequentialData() {
    this.loading = true;
    setTimeout(() => {
      this.todo = { id: 1, title: 'Do Home Work', userId: 1 };
      setTimeout(() => {
        this.userName = 'Mahalakshmi';
        this.loading = false;
      }, 1000);
    }, 1000);
  }

  
  getSequentialRealData() {
    this.loading = true;
    this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/1').pipe(
      switchMap((todo) => {
        this.todo = todo; 
        return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
      })
    ).subscribe((user) => {
      this.userName = user.name; 
      this.loading = false;
    });
  }
}
