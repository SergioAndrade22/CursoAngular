import { Component, OnInit } from '@angular/core';
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
export class HeroeComponent implements OnInit {
  heroe: Heroe= {
    bio: '',
    nombre: '',
    casa: ''
  }

  nuevo: boolean = false;
  id: string = '';

  constructor(private _heroesService: HeroesService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
        this.id = params.id
        if (this.id !== 'nuevo'){
          this._heroesService.getHeroe(this.id)
            .subscribe((response: Response) => {
              this.heroe = this._heroesService.parseResponse(response);
            })
        }
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    if (this.id === 'nuevo'){
      this._heroesService.nuevoHeroe(this.heroe)
            .subscribe( (response: Response) => {
              this.router.navigate(['/heroe', response['name']]);
            },
            error => console.error(error));
    } else{
      this._heroesService.actualizarHeroe(this.heroe, this.id)
            .subscribe( (response: Response) => {
              this.router.navigate(['/heroe', this.id]);
            },
            error => console.error(error));
    }
  }

  agregarNuevo(form: NgForm){
    this.router.navigate(['/heroe', 'nuevo']);
    form.reset();
  }
}
