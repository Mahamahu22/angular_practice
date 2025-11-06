import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EnhancedDataService {
  constructor(private dataService: DataService) {}

  getUserCount() {
    return this.dataService.getUsers().length;
  }
}
