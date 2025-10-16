import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  styleUrls: ['./todo.css'],
  template: `
    <div class="todo-container">
      <h2>📝 My Todo List</h2>
      <p class="subtitle">
         You can add, edit, and complete tasks here.
      </p>

      <ul class="todo-list">
        <li>Learn Angular Routing</li>
        <li>Create standalone components</li>
        <li>Implement navigation & route params</li>
      </ul>
    </div>
  `
})
export class TodoComponent {}
