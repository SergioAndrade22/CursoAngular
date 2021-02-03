import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../providers/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    h1{
      color: white;
    }
  `]
})
export class HomeComponent implements OnInit {

  populares: any[] = [{
    poster_path: ''
  }];

  cartelera: any[] = [{
    poster_path: ''
  }];

  kids: any[] = [{
    poster_path: ''
  }];

  constructor(private tmdbService: TMDBService) {
    this.tmdbService.getPopulares().subscribe(response => this.populares = response['results']);

    this.tmdbService.getKidsPopular().subscribe(response => this.kids = response['results']);

    this.tmdbService.getMoviesOnTheatre().subscribe(response => this.cartelera = response['results']);
  }

  ngOnInit(): void {
  }

}
