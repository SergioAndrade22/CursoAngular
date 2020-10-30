import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl: string = "https://www.googleapis.com/youtube/v3";

  private apikey: string = "AIzaSyCTSMabwMWJxIXV0KdGnWldGVZtr2z9ppI";

  private playlist: string = 'UUuaPTYj15JSkETGnEseaFFg';

  private nextPageToken: string = "";

  constructor(private http: HttpClient) { }

  getVideos(){
    let url = `${this.youtubeUrl}/playlistItems`;

    let params = new HttpParams()
                    .set('part', 'snippet')
                    .set('maxResults', '10')
                    .set('playlistId', this.playlist)
                    .set('key', this.apikey);
    if (this.nextPageToken !== ""){
      params = params.set('pageToken', this.nextPageToken);
    }

    return this.http.get( url, {params} ).pipe(
      map(response => {
        this.nextPageToken = response['nextPageToken'];
        let snippets: any[] = [];
        response['items'].forEach((item) => snippets.push(item.snippet));
        return snippets;
      })
    );
  }
}
