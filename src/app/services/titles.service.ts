import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TitlesService {

  private http = inject(HttpClient);

  getData(): Observable<any> {
    const url = "https://api.imdbapi.dev/titles";
    return this.http.get(url);
  }
}

export interface MoviesResponse {
  titles: any[];
  totalCount: any;
  nextPageToken: any;
}

export interface Title {
  id: any;
  type: any;
  primaryTitle: any;
  originalTitle: any;
  primaryImage: any;
  startYear: any;
  endYear?: any;
  runtimeSeconds?: any;
  genres: any[];
  rating?: any;
  plot: any;
}

export interface PrimaryImage {
  url: any;
  width: any;
  height: any;
}

export interface Rating {
  aggregateRating: any;
  voteCount: any;
}