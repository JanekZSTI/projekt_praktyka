import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  moviesResponse?: MoviesResponse;

  constructor(private titleService: TitlesService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.titleService.getData().subscribe(data => {
      console.log(data);
      this.moviesResponse = data
      this.cdRef.detectChanges();
    });
  }
}
