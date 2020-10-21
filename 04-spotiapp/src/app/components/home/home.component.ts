import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  newReleases: any[] = [];

  loading: boolean;

  error = false;

  errorMessage: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe( (response: any) => {
        this.newReleases = response;
      }, (serviceError) => {
        this.error = serviceError;
        this.errorMessage = serviceError.error.error.message;
      });

    this.loading = false;
  }

  ngOnInit(): void {
  }

}
