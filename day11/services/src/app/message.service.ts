import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message = '';

  sendMessage(msg: string) {
    this.message = msg;
    console.log('Message sent:', msg);
  }

  getMessage() {
    return this.message;
  }
}
