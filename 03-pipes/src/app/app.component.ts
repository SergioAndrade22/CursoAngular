import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string = 'Sergio';

  nombre2:string = 'serGio daVId anDraDe coloMbAni';

  arr:number[] = [1,2,3,4,5,6,7,8,9,10];

  PI:number = Math.PI;

  porc:number = 0.234;

  salario:number = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'primera',
      casa: 19
    }
  };

  valorDePromesa = new Promise((resolve, reject) =>{
    setTimeout( () => resolve('Llega la data!'), 3500);
  });

  fecha:Date = new Date();

  video:string = 'PsXA7HWhlWs';

  pass:string = 'UnaPassword';

  ocultar:boolean = true;
}
