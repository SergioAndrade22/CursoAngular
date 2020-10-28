import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string): any{
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({Authorization: 'Bearer QB1kCiqZ-Y5lWOEdCXCb-teJhM0Kxs7usrwLQDqLC2mCU-RPdbDwVbzMhNZZHl3YFSNFhTYLvhbBXssZljo_wP5_p8qPIaQpPndN74CR-73Y7fnEidUaOmpebTh57-QACEwGgqqqCTKHRg1DQYgOE5uQl6kJ0Y'});

    return this.http.get(url, {headers});
  }

  getNewReleases(): any{
    return this.getQuery('browse/new-releases?limit=20').pipe( map(data => data['albums'].items));
  }

  getArtistas(term: string): any{
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe( map( data => data['artists'].items));
  }

  getArtista(id: string): any{
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): any{
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe( map(response => response['tracks']));
  }
}
