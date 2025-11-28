import { Component } from '@angular/core';
import { signal, computed, effect } from '@angular/core';


@Component({
  selector: 'app-signal-demo',
  templateUrl: './signal-demo.component.html',
  styleUrls: ['./signal-demo.component.css']
})
export class SignalDemoComponent {

  counter =signal(0);

  doubleValue = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log("Counter changed:", this.counter());
    });
  }

  increment() {
    this.counter.update(v => v + 1);
  }

  decrement() {
    this.counter.update(v => v - 1);
  }

  reset() {
    this.counter.set(0);
  }
}
