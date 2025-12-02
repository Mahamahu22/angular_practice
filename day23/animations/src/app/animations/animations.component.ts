import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [

    
    trigger('slideLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-80px)' }),
        animate('600ms cubic-bezier(.22,.9,.32,1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('450ms ease-in', style({ opacity: 0, transform: 'translateX(-60px)' }))
      ])
    ]),

  
    trigger('zoomCenter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.75)' }),
        animate('500ms cubic-bezier(.18,.89,.32,1.2)', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('350ms ease-in', style({ opacity: 0, transform: 'scale(0.85)' }))
      ])
    ]),

    
    trigger('slideRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(80px)' }),
        animate('600ms cubic-bezier(.22,.9,.32,1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('450ms ease-in', style({ opacity: 0, transform: 'translateX(60px)' }))
      ])
    ]),

   
    trigger('bounceBox', [
      transition(':enter', [
        animate('900ms cubic-bezier(.2,.9,.3,1)', keyframes([
          style({ transform: 'translateY(0) scale(0.9)', offset: 0 }),
          style({ transform: 'translateY(-28px) scale(1.05)', offset: 0.35 }),
          style({ transform: 'translateY(6px) scale(0.98)', offset: 0.6 }),
          style({ transform: 'translateY(-10px) scale(1.02)', offset: 0.8 }),
          style({ transform: 'translateY(0) scale(1)', offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class AnimationsComponent {


  boxState = 'normal';
  advState = 'start';
  listItems: string[] = [];

  
  showLeft = false;
  showCenter = false;
  showRight = false;

  
  showColor = false;

 
  showBounce = false;


  onAnimate() {
    this.boxState = this.boxState === 'normal' ? 'highlighted' : 'normal';
  }

  onAdvancedAnimate() {
    this.advState = this.advState === 'start' ? 'end' : 'start';
  }

  onAddItem() {
    this.listItems.push('New Item');
  }

  onDeleteItem(index: number) {
    this.listItems.splice(index, 1);
  }

  
  showAnim(type: 'left' | 'center' | 'right') {
    this.showLeft = type === 'left';
    this.showCenter = type === 'center';
    this.showRight = type === 'right';
   
    this.showColor = false;
    this.showBounce = false;
  }

 
  toggleColor() {
    
    
    this.showColor = !this.showColor;
    
    if (this.showColor) {
      this.showLeft = this.showCenter = this.showRight = false;
      this.showBounce = false;
    }
  }

  
  toggleBounce() {
    
   
    this.showBounce = !this.showBounce;
    if (this.showBounce) {
      this.showLeft = this.showCenter = this.showRight = false;
      this.showColor = false;
    }
  }
}
