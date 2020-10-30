import { Component, OnInit } from '@angular/core';
import { Marker } from '../clases/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { EditarMarcadorComponent } from './editar-marcador.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marker[] = [];

  lat: number = 51.678418;
  long: number = 7.809007;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
    if (localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit(): void {
  }

  agregarMarcador($event){
    const coords: { lat: number, long:number } =  $event.coords;

    const mark = new Marker(coords.lat, coords.long);

    this.marcadores.push(mark);

    this.guardarStorage();

    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 2000});

  }

  borrar(index: number){
    this.marcadores.splice(index, 1);

    this.guardarStorage();

    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 2000 });
  }

  editarMarcador(marcador: Marker){
    const dialogRef = this.dialog.open(EditarMarcadorComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined){
        marcador.titulo = result.titulo;
        marcador.desc = result.desc
        this.guardarStorage();
        this.snackBar.open('Información actualizada', 'Cerrar', { duration: 2000 })
      }
    });
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }


}
