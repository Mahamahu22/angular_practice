import { Component, ViewChild, signal } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoItemComponent } from './todo-item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos = signal<Todo[]>([
    { id: 1, title: 'learn angular pipes', done: false, date: new Date() },
    { id: 2, title: 'use viewchild in todo app', done: true, date: new Date() }
  ]);

  @ViewChild(TodoItemComponent) todoChild!: TodoItemComponent;

  addTodo(title: string) {
    if (!title.trim()) return;
    const newTodo: Todo = { id: Date.now(), title, done: false, date: new Date() };
    this.todos.update(list => [...list, newTodo]);
  }

  removeTodo(id: number) {
    this.todos.update(list => list.filter(todo => todo.id !== id));
  }

  toggleDone(id: number) {
    this.todos.update(list =>
      list.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
  }

  highlightFirstTodo() {
    this.todoChild.highlight();
  }
}
