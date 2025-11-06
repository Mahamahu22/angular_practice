import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user';
import { SenderComponent } from './sender/sender';
import { ReceiverComponent } from './receiver/receiver';
import { UniqueComponent } from './unique/unique';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserComponent, SenderComponent, ReceiverComponent, UniqueComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('services');
}
