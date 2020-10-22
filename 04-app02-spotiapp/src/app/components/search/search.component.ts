import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];

  loading:boolean;

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(term:string){
    console.log(term);
    this.loading = true;
    this._spotifyService.getArtistas(term).subscribe( (response:any) => {
      this.artistas = response;
    });
    this.loading = false;
  }
}
