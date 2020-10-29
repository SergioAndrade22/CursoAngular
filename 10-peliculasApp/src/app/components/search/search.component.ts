import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../providers/tmdb.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
  .searchbar{
      margin-bottom: auto;
      margin-top: auto;
      height: 60px;
      background-color: #08A6D2;
      border-radius: 30px;
      padding: 10px;
    }

    .search_input{
      color: white;
      border: 0;
      outline: 0;
      background: none;
      width: 0;
      caret-color:transparent;
      line-height: 40px;
      transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
      padding: 0 10px;
      width: 450px;
      caret-color:red;
      transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
      background: white;
      color: #e74c3c;
    }

    .search_icon{
      height: 40px;
      width: 40px;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color:white;
      text-decoration:none;
    }
  `]
})
export class SearchComponent implements OnInit {

  movies: any[] = [];
  loading: boolean = false;

  constructor(private _tmdbService: TMDBService, private router: Router, private route: ActivatedRoute) { 
    let term: string;
    this.route.params.subscribe( data => term = data.term);
    this.search(term);
  }

  ngOnInit(): void {
  }

  search(term: string): void{
    this.loading = true;
    if (this.termValidator(term)){
      this._tmdbService.getMovieByTitle(term).subscribe(response => this.movies = response['results']);
    }
    else{
      this.movies = [];
    }
    this.loading = false;
  }

  termValidator(term: string){
    return term != undefined && term != "" && term != " ";
  }

  result(movie: any){
    this.router.navigate(['/result', movie.original_title]);
  }
}
