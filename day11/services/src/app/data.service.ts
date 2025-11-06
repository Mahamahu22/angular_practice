import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users = ['Maha', 'Lakshmi', ' Aishwarya'];

  constructor(private loggingService: LoggingService) {}

  getUsers() {
    this.loggingService.log('Fetched users list');
    return [...this.users];
  }

  addUser(user: string) {
    this.users.push(user);
    this.loggingService.log('Added user: ' + user);
  }
}
