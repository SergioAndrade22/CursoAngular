import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{
  heroes:Heroe[];
  term:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.term = this.activatedRoute.params['value']['heroe'];
    this.heroes = this._heroesService.buscarHeroes(this.term);
  }

  public verHeroe(h:Heroe):void{
    this.router.navigate(['/heroe', h.nombre]);
  }
}