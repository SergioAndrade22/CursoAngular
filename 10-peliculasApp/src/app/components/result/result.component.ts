import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDBService } from '../../providers/tmdb.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent implements OnInit {

  movie: any = {
    poster_path: ''
  }

  constructor(private route: ActivatedRoute, private _tmdbService: TMDBService, private location: Location) {
    route.params.subscribe(data => _tmdbService.getMovieByTitle(data.movie).subscribe( response => this.movie = response['results'][0]));
    console.log(this.movie);
  }

  ngOnInit(): void {
  }

  public goBack(){
    this.location.back();
  }

}
