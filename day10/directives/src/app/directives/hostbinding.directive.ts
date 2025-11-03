import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]',
  standalone: true,
})
export class HostBindingDirective {
  @HostBinding('style.backgroundColor') bgColor = 'pink';

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'orange';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'pink';
  }
}
