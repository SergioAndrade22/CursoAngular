import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent {
  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<Heroe>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  public verHeroe(): void {
    this.heroeSeleccionado.emit(this.heroe);
  }
}
