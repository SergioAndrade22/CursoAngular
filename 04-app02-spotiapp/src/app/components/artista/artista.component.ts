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

  artista: any = {};
  topTracks: any[] = [];

  loading: boolean;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    const id = this.route.params['value'].id;

    this.getArtista(id);
    this.getTopTracks(id);
  }

  getArtista(id: string): void{
    this.spotifyService.getArtista(id).subscribe( response => this.artista = response);
    this.loading = false;
  }

  getTopTracks(id: string): void{
    this.spotifyService.getTopTracks(id).subscribe( response => this.topTracks = response);
  }
}
