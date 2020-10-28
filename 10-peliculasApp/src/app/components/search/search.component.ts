import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../providers/tmdb.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  movies: any[] = [];

  constructor(private _tmdbService: TMDBService, private router: Router, private route: ActivatedRoute) { 
    let term: string;
    this.route.params.subscribe( params => term = params.term);
    if (term !== undefined){
      this._tmdbService.getMovieByTitle(term).subscribe(response => {
        this.movies = response['results'];
        console.log(this.movies);
      });
    }
  }

  ngOnInit(): void {
  }

}
