import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})

export class HeroeComponent{
  loader: Subscription;

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.heroe = this.heroesService.getHeroeByName(this.activatedRoute.params['value']['name']);
  }

}
