import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

  artistas:any[] = [];

  loading:boolean;

  constructor(private _spotifyService:SpotifyService) { }

  buscar(term:string): void{
    console.log(term);
    this.loading = true;
    this._spotifyService.getArtistas(term).subscribe( response => this.artistas = response);
    this.loading = false;
  }
}
