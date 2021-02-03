import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  headers = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  fireUrl = 'https://heroesapp-8e301.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesapp-8e301.firebaseio.com/heroes';

  constructor(private http: HttpClient) { }

  getHeroe(key$: string): Observable<Response>{
    const url = `${this.heroeUrl}/${ key$}.json`;

    return this.http.get(url, this.headers).pipe( map((response: Response) => response));
  }

  nuevoHeroe(heroe: Heroe): Observable<Response>{ // Usa el servicio POST de Firebase para insertar nuevos elementos
    const body = JSON.stringify(heroe);

    return this.http.post(this.fireUrl, body, this.headers).pipe( map( (response: Response) => response));
  }

  actualizarHeroe(heroe: Heroe, key$: string): Observable<Response>{ // Usa el servicio PUT de Firebase para modificar un héroe existente
    const body = JSON.stringify(heroe);

    const url = `${this.heroeUrl}/${ key$ }.json`;

    return this.http.put( url, body, this.headers).pipe( map((response: Response) => response));
  }

  borrarHeroe(key$: string): Observable<Response>{
    const url = `${this.heroeUrl}/${key$}.json`;

    return this.http.delete(url, this.headers).pipe( map((response: Response) => response));
  }

  getHeroes(): Observable<Response>{
    return this.http.get(this.fireUrl, this.headers).pipe( map((response: Response) => response));
  }

  parseResponse(response: any): Heroe{
    return {
      nombre: response.nombre,
      casa: response.casa,
      bio: response.bio
    };
  }
}
