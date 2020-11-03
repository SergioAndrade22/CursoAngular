import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  mouseHoverDrop: boolean = false;

  archivos: FileItem[] = [];

  constructor(public _fbs: FirebaseService) { }

  ngOnInit(): void {
  }

  cargarImagenes(){
    this._fbs.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos(){
    this.archivos = [];
  }
}
