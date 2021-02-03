import { Component} from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [`
    button{
      margin: 2px;
    }
    td {
      border-left: 0.5px solid black;
      border-right: 0.5px solid black;
      border-bottom: 0.5px solid black;
    }
    th {
      border-left: 0.5px solid black;
      border-right: 0.5px solid black;
    }
    .ex30 {
      width: 30%;
    }
    .ex10 {
      width: 10%;
    }
  `]
})
export class HeroesComponent{

  heroes: Heroe[] = [];

  loading = true;

  show = false;

  deleteKey = '';

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes()
      .subscribe(response => {
        for (const key$ in response){
          const heroe = this.heroesService.parseResponse(response[key$]);
          heroe.key$ = key$;
          this.heroes.push(heroe);
        }
        this.loading = false;
      });
  }

  borrarHeroe(): void{
    this.heroesService.borrarHeroe(this.deleteKey) // elimina de la DB en Firebase
    .subscribe(response => {
      if (response){
        console.error(response);
      } else{ // elimino localmente si se eliminó correctamente en la DB, permite una tabla reactiva
        for (let i = 0; i < this.heroes.length; i++){
          if (this.heroes[i].key$ === this.deleteKey){
            this.heroes.splice(i, 1);
          }
        }
      }
    });
  }

  showModal(): void {
    this.show = true;
  }

  hideModal(): void {
    this.show = false;
  }
}
