import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDBService } from '../../providers/tmdb.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: []
})
export class ResultComponent implements OnInit {

  movie: any = {
    poster_path: ''
  };

  constructor(private route: ActivatedRoute, private tmdbService: TMDBService, private location: Location) {
    route.params.subscribe(data => tmdbService.getMovieByTitle(data.movie).subscribe( response => {
      this.movie = response['results'][0];
      this.movie.release_date = new Date(this.movie.release_date).getFullYear();
    }));
  }

  ngOnInit(): void {
  }

  public goBack(): void {
    this.location.back();
  }

}
