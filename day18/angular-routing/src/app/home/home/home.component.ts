import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flowers = [
    { name: 'Rose', image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' },
    { name: 'Tulip', image: 'https://images.pexels.com/photos/4495681/pexels-photo-4495681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' },
    { name: 'Sunflower', image: 'https://images.pexels.com/photos/573292/pexels-photo-573292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' },
    { name: 'Daisy', image: 'https://images.pexels.com/photos/569966/pexels-photo-569966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' },
    { name: 'Lily', image: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' },
    { name: 'Orchid', image: 'https://images.pexels.com/photos/378370/pexels-photo-378370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' },
    { name: 'Marigold', image: 'https://images.pexels.com/photos/134680/pexels-photo-134680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' },
    { name: 'Lotus', image: 'https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' },
  ];
}
