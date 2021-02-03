import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
import { AngularFireStorage } from '@angular/fire/storage/storage';
import { UploadTask } from '@angular/fire/storage/interfaces';
import { AngularFireStorageReference } from '@angular/fire/storage/ref';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private CARPETA_IMAGENES = 'img';

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {}

  cargarImagenesFirebase(imagenes: FileItem[]): void {
    for (const item of imagenes){
      item.uploading = true;
      if (item.progreso >= 100){
        continue;
      }
      const file = item.archivo;
      const filePath = `${this.CARPETA_IMAGENES}/${item.nombreArchivo}`;
      const storageRef: AngularFireStorageReference = this.storage.ref(filePath);

    }
  }

  private guardarImagen(imagen: {nombre: string, url: string}): void{
    this.firestore.collection(`/${this.CARPETA_IMAGENES}`)
                      .add(imagen);
  }
}
