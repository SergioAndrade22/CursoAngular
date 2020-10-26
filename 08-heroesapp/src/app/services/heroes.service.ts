import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireUrl:string = "https://heroesapp-8e301.firebaseio.com/heroes.json"
  heroeUrl: string = "https://heroesapp-8e301.firebaseio.com/heroes";

  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe){ //Usa el servicio POST de Firebase para insertar nuevos elementos
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post(this.fireUrl, body, { headers })
              .pipe( map( (response: Response) => {
                return response;
              }));
  }

  actualizarHeroe(heroe: Heroe, key$: string){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let url = `${this.heroeUrl}/${ key$ }.json`;

    return this.http.put( url, body, {headers})
            .pipe( map((response: Response) => {
              return response;
            }));
  }

  getHeroe(key$: string){
    let url = `${this.heroeUrl}/${ key$}.json`;
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.get(url, {headers})
            .pipe( map((response: Response) => {
              return response;
            }))
  }

  getHeroes(){
    return this.http.get(this.fireUrl)
            .pipe( map((response: Response) => response));
  }

  borrarHeroe(key$: string){
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete(url, {headers})
            .pipe( map((response: Response)=>{
              return response;
            }));
  }

  parseResponse(response: Response): Heroe{
    return {
      nombre: response['nombre'],
      casa: response['casa'],
      bio: response['bio']
    };
  }
}
