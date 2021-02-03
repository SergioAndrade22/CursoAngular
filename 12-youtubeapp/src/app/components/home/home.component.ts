import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  videos: any[] = [];

  videoSelec: any;

  constructor(private ytService: YoutubeService) {
    this.ytService.getVideos().subscribe(response => this.videos = response);
  }

  cargarMas(): void {
    this.ytService.getVideos().subscribe(response => this.videos.push.apply(this.videos, response));
  }

  verVideo(video: any): void {
    this.videoSelec = video;
    $('#myModal').modal();
  }

  cerrarModal(): void {
    this.videoSelec = null;
    $('#myModal').modal('hide');
  }

}
