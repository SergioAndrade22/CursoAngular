import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  private apikey = '1d39ef4ae116280b9df95e57803cca06';
  private urlBase = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {

  }

  getPopulares(): Observable<Response> {
    const url = `${this.urlBase}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(
      map((response: Response) => response)
    );
  }

  getKidsPopular(): Observable<Response> {
    const url = `${this.urlBase}/discover/movie?certification_country=US&certification.lte=G&certification.gte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(
      map((response: Response) => response)
    );
  }

  getMoviesOnTheatre(): Observable<Response> {
    const now: Date = new Date();

    const prevWeek: Date = new Date();

    prevWeek.setDate(now.getDate() - 7);

    const upperDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

    const lowerDate = `${prevWeek.getFullYear()}-${prevWeek.getMonth() + 1}-${prevWeek.getDate()}`;

    const url = `${this.urlBase}/discover/movie?primary_release_date.gte=${lowerDate}&primary_release_date.lte=${upperDate}&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(
      map((response: Response) => response)
    );
  }

  getMovieByTitle(term: string): Observable<Response> {
    const url = `${this.urlBase}/search/movie?api_key=${this.apikey}&query=${term}&language=es`;

    return this.http.get(url).pipe(
      map((response: Response) => response)
    );
  }
}
