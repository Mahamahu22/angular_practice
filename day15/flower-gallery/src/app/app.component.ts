import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flower Gallery';

  flowers = [
    { name: 'Rose', img: 'assets/daisy.jpg', desc: 'Symbol of love and beauty.' },
    { name: 'Lily', img: 'assets/hydrangea.jpg', desc: 'Elegant and fragrant bloom.' },
    { name: 'Sunflower', img: 'assets/sunflower.jpg', desc: 'Bright and cheerful face.' },
    { name: 'Jasmine', img: 'assets/jasmine.jpg', desc: 'Sweet aroma of purity.' },
    { name: 'Lotus', img: 'assets/lotus.jpg', desc: 'Sacred and serene symbol.' },
    { name: 'Lotus', img: 'assets/tulip.jpg', desc: 'Kindness and grace.' }
  ];
}
