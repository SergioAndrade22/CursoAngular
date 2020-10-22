import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {
  
  user: Object=  {
    nombre: "Sergio",
    apellido: "Andrade",
    mail: ""
  }

  constructor() { }

  guardar(form: NgForm){
    console.log("ngForm: ",form);
    console.log("value form: ", form.value);
    console.log("usuario:", this.user);
  }

  ngOnInit(): void {
  }

}
