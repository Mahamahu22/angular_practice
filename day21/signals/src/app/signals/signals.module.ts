import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';

@NgModule({
  declarations: [SignalDemoComponent],
  imports: [CommonModule],
  exports: [SignalDemoComponent]
})
export class SignalsModule { }
