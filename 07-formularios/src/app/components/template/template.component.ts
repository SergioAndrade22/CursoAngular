import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {
  
  user =  {
    nombre: null,
    apellido: null,
    mail: null,
    pais: "",
    sexo: null
  }

  paises = [
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ARG",
      nombre: "Argentina"
    },
    {
      codigo: "CHL",
      nombre: "Chile"
    }
  ]

  sexos= [
    "Hombre",
    "Mujer",
    "Otro"
  ]

  acepta: boolean = false;

  constructor() { }

  guardar(form: NgForm){
    console.log("ngForm: ",form);
    console.log("value form: ", form.value);
    console.log("usuario:", this.user);
  }

  ngOnInit(): void {
  }

}
