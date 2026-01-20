import { ChangeDetectionStrategy, Component, OnInit, signal, inject } from '@angular/core';
import { TitlesService } from '../../services/titles.service';
import { MoviesResponse, Title } from '../../services/titles.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialog } from '../movie-dialog/movie-dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.html',
  standalone: true,
  styleUrls: ['./movie-titles.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class MovieTitles implements OnInit {
  moviesResponse = signal<MoviesResponse | undefined>(undefined);


  constructor(private titleService: TitlesService) { }

  ngOnInit(): void {
    this.titleService.getData().subscribe((data) => {
      console.log(data);
      this.moviesResponse.set(data);
    });
  }

  readonly dialog = inject(MatDialog);

  openDialog(movie: Title): void {
    this.dialog.open(MovieDialog, {
      data: movie,
    });
  }

  openMovieDetails(id: string): void {
    this.titleService.getTitleById(id).subscribe(data => {
      this.openDialog(data);
    });
  }
}