import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes Demo';
  today: Date = new Date();
  price: number = 1234.56;

  // For Multiply Pipe
  amount: number = 50;
  factor: number = 5;

  // For Filter Pipe
  searchText: string = '';
  fruits: string[] = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
}
