import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  private apikey: string = '1d39ef4ae116280b9df95e57803cca06';
  private urlBase: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { 

  }

  getPopulares(){
    let url = `${this.urlBase}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    
    return this.http.get(url).pipe( 
      map((response:Response) => response)
    );
  }

  getKidsPopular(){
    let url = `${this.urlBase}/discover/movie?certification_country=US&certification.lte=G&certification.gte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(
      map((response:Response) => response)
    );
  }

  getMoviesOnTheatre(){
    let now: Date = new Date();

    let prevWeek: Date = new Date();

    prevWeek.setDate(now.getDate() - 7);

    let upperDate: string = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

    let lowerDate: string = `${prevWeek.getFullYear()}-${prevWeek.getMonth() + 1}-${prevWeek.getDate()}`;

    let url = `${this.urlBase}/discover/movie?primary_release_date.gte=${lowerDate}&primary_release_date.lte=${upperDate}&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe( 
      map((response:Response) => response)
    );
  }

  getMovieByTitle(term: string){
    let url = `${this.urlBase}/search/movie?api_key=${this.apikey}&query=${term}`;

    return this.http.get(url).pipe( 
      map((response:Response) => response)
    );
  }
}
