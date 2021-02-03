import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  public usuario: any = {};

  constructor(private afs: AngularFirestore,
              public authService: AngularFireAuth) {
    this.authService.authState.subscribe( user => {
      if (user){
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      }
    });
  }

  login( provider: string): void {
    switch (provider){
      case 'google':
        this.authService.signInWithPopup(new auth.GoogleAuthProvider());
        break;
      case 'twitter':
        this.authService.signInWithPopup(new auth.TwitterAuthProvider());
        break;
      case 'github':
        this.authService.signInWithPopup(new auth.GithubAuthProvider());
        break;
    }
  }

  logout(): void {
    this.usuario = {};
    this.authService.signOut();
  }

  cargarMensajes(): Observable<Mensaje[]> {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'asc').limitToLast(5));

    return this.itemsCollection.valueChanges().pipe(map((mensajes: Mensaje[]) => this.chats = mensajes));
  }

  agregarMensaje(texto: string): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> {
    const mensaje: Mensaje = {
      nombre : this.usuario.nombre,
      mensaje : texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };

    return this.itemsCollection.add(mensaje);
  }
}
