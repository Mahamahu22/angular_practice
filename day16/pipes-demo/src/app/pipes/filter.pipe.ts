import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: string[], searchText: string): string[] {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
