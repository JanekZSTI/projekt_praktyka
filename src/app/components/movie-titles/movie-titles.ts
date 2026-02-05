import { ChangeDetectionStrategy, Component, OnInit, signal, inject } from '@angular/core';
import { TitlesService } from '../../services/titles.service';
import { MoviesResponse, Title } from '../../services/titles.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialog } from '../movie-dialog/movie-dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MoviePipe } from '../pipes/movie-pipe';
import { GenresPipe } from '../pipes/genres-pipe';
import { MoviePagination } from '../movie-pagination/movie-pagination';
import { MovieFilters } from "../movie-filters/movie-filters";


@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.html',
  standalone: true,
  styleUrls: ['./movie-titles.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CommonModule, MatButtonModule, MatIconModule, MoviePipe, MoviePagination, GenresPipe, MovieFilters]
})

export class MovieTitles implements OnInit {
  moviesResponse = signal<MoviesResponse | undefined>(undefined);
  selectedMovie = signal<Title | undefined>(undefined);

  pageTokens = signal<string[]>(['']);
  currentPage = signal<number>(1);
  selectedTypes = signal<string[]>([]);

  titleService = inject(TitlesService);
  dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadPage('', []);
  }

  loadPage(token: string, types: string[]): void {
    this.titleService.getData(token, types).subscribe((data) => {
      console.log('Dane z API:', data);
      console.log('Liczba filmów:', data.titles.length);
      this.moviesResponse.set(data);
    });
  }

  onFiltersChanged(types: string[]): void {
    this.selectedTypes.set(types);
    
    this.currentPage.set(1);
    this.pageTokens.set(['']);
    
    this.loadPage('', types);
  }

  hasNextPage(): boolean {
    return !!this.moviesResponse()?.nextPageToken;
  }

  hasPreviousPage(): boolean {
    return this.currentPage() > 1;
  }

  openDialog(movie: Title): void {
    this.dialog.open(MovieDialog, {
      data: movie,
    });
  }

  openMovieDetails(id: string): void {
    this.titleService.getTitleById(id).subscribe((data) => {
      this.openDialog(data);
    });
  }

  nextPage() {
    const nextToken = this.moviesResponse()?.nextPageToken;
    if (nextToken) {
      const tokens = this.pageTokens();
      if (!tokens.includes(nextToken)) {
        tokens.push(nextToken);
        this.pageTokens.set(tokens);
      }

      this.currentPage.set(this.currentPage() + 1);
      this.loadPage(nextToken, this.selectedTypes());
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      const newPage = this.currentPage() - 1;
      this.currentPage.set(newPage);

      const token = this.pageTokens()[newPage - 1];
      this.loadPage(token, this.selectedTypes());
    }
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }
}