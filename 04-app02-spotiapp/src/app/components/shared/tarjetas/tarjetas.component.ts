import { Component, Input, ValueSansProvider } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent{

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtista(item: any): void{
    let artistaId: number;
    switch (item.type) {
      case 'artist':
        artistaId = item.id;
        break;
      case 'album':
        artistaId = item.artists[0].id;
        break;
      default:
        artistaId = undefined;
        break;
    }
    this.router.navigate(['/artist', artistaId]);
  }
}
