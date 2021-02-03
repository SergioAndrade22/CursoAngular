import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    button {
      margin: 2px;
    }
  `]
})
export class HeroeComponent{
  heroe: Heroe = {
    bio: '',
    nombre: '',
    casa: ''
  };

  nuevo = false;
  id = '';

  constructor(private heroesService: HeroesService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
        this.id = params.id;
        if (this.id !== 'nuevo'){
          this.heroesService.getHeroe(this.id)
            .subscribe((response: Response) => {
              this.heroe = this.heroesService.parseResponse(response);
            });
        }
    });
  }

  guardar(): void{
    if (this.id === 'nuevo'){
      this.heroesService.nuevoHeroe(this.heroe)
            .subscribe( (response: Response) => {
              this.router.navigate(['/heroe', response['name']]);
            },
            error => console.error(error));
    } else{
      this.heroesService.actualizarHeroe(this.heroe, this.id)
            .subscribe( (response: Response) => {
              this.router.navigate(['/heroe', this.id]);
            },
            error => console.error(error));
    }
  }

  agregarNuevo(form: NgForm): void{
    this.router.navigate(['/heroe', 'nuevo']);
    form.reset();
  }
}
