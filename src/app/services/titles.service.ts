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

    getTitleById(id: string): Observable<Title> {
        const url = 'https://api.imdbapi.dev/titles/' + id;
        return this.http.get<Title>(url);
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
    isAdult: boolean;
    primaryTitle: string;
    originalTitle: string;
    primaryImage: PrimaryImage;
    startYear: number;
    endYear: number;
    runtimeSeconds: number;
    genres: string[];
    rating: Rating;
    metacritic: Metacritic;
    plot: string;
    directors: Director[];
    writers: Director[];
    stars: Director[];
    originCountries: OriginCountry[];
    spokenLanguages: OriginCountry[];
    interests: Interest[];
}

export interface Director {
    id: string;
    displayName: string;
    alternativeNames: string[];
    primaryImage: PrimaryImage;
    primaryProfessions: string[];
    biography: string;
    heightCm: number;
    birthName: string;
    birthDate: ThDate;
    birthLocation: string;
    deathDate: ThDate;
    deathLocation: string;
    deathReason: string;
    meterRanking: MeterRanking;
}

export interface ThDate {
    year: number;
    month: number;
    day: number;
}

export interface MeterRanking {
    currentRank: number;
    changeDirection: string;
    difference: number;
}

export interface PrimaryImage {
    url: string;
    width: number;
    height: number;
    type: string;
}

export interface Interest {
    id: string;
    name: string;
    primaryImage: PrimaryImage;
    description: string;
    isSubgenre: boolean;
    similarInterests: SimilarInterest[];
}

export interface SimilarInterest {
}

export interface Metacritic {
    url: string;
    score: number;
    reviewCount: number;
}

export interface OriginCountry {
    code: string;
    name: string;
}

export interface Rating {
    aggregateRating: number;
    voteCount: number;
}
