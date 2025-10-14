import { Component, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() remove = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  highlight() {
    this.el.nativeElement.style.backgroundColor = 'lightyellow';
  }
}
