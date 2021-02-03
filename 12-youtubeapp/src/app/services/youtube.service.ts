import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';

  private apikey = 'AIzaSyCTSMabwMWJxIXV0KdGnWldGVZtr2z9ppI';

  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';

  private nextPageToken = '';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any[]>{
    const url = `${this.youtubeUrl}/playlistItems`;

    let params = new HttpParams()
                    .set('part', 'snippet')
                    .set('maxResults', '10')
                    .set('playlistId', this.playlist)
                    .set('key', this.apikey);
    if (this.nextPageToken !== ''){
      params = params.set('pageToken', this.nextPageToken);
    }

    return this.http.get( url, {params} ).pipe(
      map(response => {
        this.nextPageToken = response['nextPageToken'];
        const snippets: any[] = [];
        response['items'].forEach((item) => snippets.push(item.snippet));
        return snippets;
      })
    );
  }
}
