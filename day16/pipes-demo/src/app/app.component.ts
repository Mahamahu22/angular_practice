import { Component } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes Demo App';

  today = new Date();
  price = 2500.567;
  user = { name: 'maha n', city: 'Dubai' };
  items = ['Angular', 'React', 'Vue', 'Node'];

  search = '';
  languages = ['Angular', 'React', 'Vue', 'Node', 'Python', 'Java'];

  data$ = new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded!"), 2000);
  });
}
