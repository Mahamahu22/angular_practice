import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  @Output() navSelect = new EventEmitter<string>();
  onSelect(feature: string) {
    this.navSelect.emit(feature);
  }
}
