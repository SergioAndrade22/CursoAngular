import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../providers/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .carousel-inner{
      background: lightgrey !important;
    }
  `]
})
export class HomeComponent implements OnInit {

  populares: any[] = [{
    poster_path: ''
  }];

  constructor(private _tmdbService: TMDBService) { 
    this._tmdbService.getPopulares().subscribe(response => {
      this.populares = response['results'];
    });
  }

  ngOnInit(): void {
  }

  foo(s: any){
    console.log(s)
  }
}
