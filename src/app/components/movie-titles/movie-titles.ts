import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { TitlesService } from '../../services/titles.service';
import { MoviesResponse } from '../../services/titles.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.html',
  standalone: true,
  styleUrls: ['./movie-titles.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class MovieTitles implements OnInit {
  moviesResponse = signal<MoviesResponse | undefined>(undefined);

  constructor(private titleService: TitlesService) {}

  ngOnInit(): void {
    this.titleService.getData().subscribe((data) => {
      console.log(data);
      this.moviesResponse.set(data);
    });
  }
}