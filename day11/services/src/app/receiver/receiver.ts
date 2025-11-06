import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receiver.html',
  styleUrl: './receiver.css'
})
export class ReceiverComponent {
  constructor(private messageService: MessageService) {}

  get message() {
    return this.messageService.getMessage();
  }
}
