import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe: Heroe= {
    bio: '',
    nombre: '',
    casa: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.heroe);
  }
}
