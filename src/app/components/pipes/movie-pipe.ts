import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviePipe',
})

export class MoviePipe implements PipeTransform {
  transform(value: unknown, format?: string): any {
    if (format === 'type') {
      if (value === 'tvSeries') {
        return 'serial';
      } else if (value === 'movie') {
        return 'film';
      } else if (value === 'tvMiniSeries') {
        return 'miniSerial';
      } else {
        return value;
      }
    }

    if (Array.isArray(value)) {
      return value.join(', ');
    } else {
      return value;
    }
  }
}