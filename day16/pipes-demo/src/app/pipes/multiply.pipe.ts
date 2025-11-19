import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number, factor: number = 1): number {
    return value * factor;
  }
}
