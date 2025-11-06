import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sender.html',
  styleUrl: './sender.css'
})
export class SenderComponent {
  newMessage: string = '';

  constructor(private messageService: MessageService) {}

  send() {
    if (this.newMessage.trim()) {
      this.messageService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
