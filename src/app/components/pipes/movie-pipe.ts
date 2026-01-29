import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviePipe',
})

export class MoviePipe implements PipeTransform {
  transform(value: unknown, format?: string): any {
    if (format === 'type') {
      switch(value) {
        case 'tvSeries':
          return 'serial';
        case 'movie':
          return 'film';
        case 'tvMiniSeries':
          return 'mini serial';
        default:
          return value;
      }
    }
  }
}

