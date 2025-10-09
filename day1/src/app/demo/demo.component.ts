import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,      
  imports: [CommonModule], 
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input() todo: string = '';
  @Output() remove = new EventEmitter<void>();

  
  done = signal(false);

  toggleDone() {
    this.done.set(!this.done());
  }

  removeTodo() {
    this.remove.emit();
  }
}
