import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista:any = {};
  topTracks: any[] = [];

  loading:boolean;

  constructor(private route: ActivatedRoute,
              private _spotifyService: SpotifyService) { 
    this.loading = true;
    let id = this.route.params['value']['id'];

    this.getArtista(id);
    this.getTopTracks(id);
  }

  getArtista(id:string){
    this._spotifyService.getArtista(id).subscribe( response => {
      console.log(response);
      this.artista = response;
    });
    this.loading = false;
  }

  getTopTracks(id:string){
    this._spotifyService.getTopTracks(id).subscribe( response => {
      console.log(response);
      this.topTracks = response;
    })
  }
}
