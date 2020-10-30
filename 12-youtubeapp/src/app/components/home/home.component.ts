import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];

  videoSelec: any;

  constructor(private _ytService: YoutubeService) { 
    this._ytService.getVideos().subscribe(response => this.videos = response);
  }

  cargarMas(){
    this._ytService.getVideos().subscribe(response => this.videos.push.apply(this.videos, response));
  }

  verVideo(video: any){
    this.videoSelec = video;
    $('#myModal').modal();
  }

  cerrarModal(){
    this.videoSelec = null;
    $('#myModal').modal('hide');
  }

  ngOnInit(): void {
  }

}
