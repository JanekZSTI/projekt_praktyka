import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../services/titles.service';


@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.html',
  standalone: true,
  styleUrls: ['./movie-titles.css'],
})

export class MovieTitles implements OnInit {

  constructor(private titleService: TitlesService) {}

  ngOnInit(): void {
    this.titleService.getData().subscribe(data => {
      console.log(data);       

    });
  }
}
