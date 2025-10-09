import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DemoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  newTodo: string = '';
  todos = signal<string[]>([]);
  totalTodos = signal(0);

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.set([...this.todos(), this.newTodo.trim()]);
      this.totalTodos.set(this.todos().length);
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    const updated = this.todos().filter((_, i) => i !== index);
    this.todos.set(updated);
    this.totalTodos.set(updated.length);
  }
}
