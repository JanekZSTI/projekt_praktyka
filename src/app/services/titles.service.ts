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
