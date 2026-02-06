import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genresPipe',
})

export class GenresPipe implements PipeTransform {
  transform(value: unknown, format?: string): any {
   
    if (format === 'genres') {
      if (Array.isArray(value)) {
        return value.map(genre => this.translateGenre(genre)).join(', ');
      }

      return this.translateGenre(value);
    }
    
    return value;
  }

  private translateGenre(genre: unknown): string {
    switch (genre) {
      case 'Action':
        return 'Akcja';
      case 'Adventure':
        return 'Przygodowy';
      case 'Animation':
        return 'Animacja';
      case 'Biography':
        return 'Biograficzny';
      case 'Comedy':
        return 'Komedia';
      case 'Crime':
        return 'Kryminał';
      case 'Drama':
        return 'Dramat';
      case 'Family':
        return 'Familijny';
      case 'Fantasy':
        return 'Fantastyczny';
      case 'History':
        return 'Historyczny';
      case 'Music':
        return 'Muzyczny';
      case 'Mystery':
        return 'Tajemnica';
      case 'Romance':
        return 'Romans';
      case 'Sport':
        return 'Sportowy';
      case 'War':
        return 'Wojenny';
      case 'Documentary':
        return 'Dokument';        
      default:
        return String(genre);
    }
  }
}