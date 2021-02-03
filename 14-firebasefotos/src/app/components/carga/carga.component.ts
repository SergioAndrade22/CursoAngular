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

  mouseHoverDrop = false;

  archivos: FileItem[] = [];

  constructor(public fbs: FirebaseService) { }

  ngOnInit(): void {
  }

  cargarImagenes(): void {
    this.fbs.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos(): void {
    this.archivos = [];
  }
}
