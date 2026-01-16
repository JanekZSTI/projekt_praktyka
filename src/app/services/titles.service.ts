import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TitlesService {
  private http = inject(HttpClient);

  getData(): Observable<MoviesResponse> {
    const url = "https://api.imdbapi.dev/titles";
    return this.http.get<MoviesResponse>(url);
  }
}

export interface MoviesResponse {
  titles: Title[];
  totalCount: number;
  nextPageToken: string;
}

export interface Title {
  id: string;
  type: string;
  primaryTitle: string;
  originalTitle: string;
  primaryImage?: PrimaryImage;
  startYear: number;
  endYear?: number;
  runtimeSeconds?: number;
  genres: string[];
  rating?: Rating;
  plot: string;
}

export interface PrimaryImage {
  url: string;
  width: number;
  height: number;
}

export interface Rating {
  aggregateRating: number;
  voteCount: number;
}
