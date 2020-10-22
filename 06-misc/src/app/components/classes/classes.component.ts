import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [`
    .myButton{
      text-align:center;
      width: 35px;
      height: 35px;
      margin: 5px;
      padding: 0px;
    }
  `]
})
export class ClassesComponent implements OnInit {

  alerta: string = "alert-danger";

  loading: boolean = false;

  props ={
    danger: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  execute(){
    this.loading = true;

    setTimeout(() => this.loading = false, 3000);
  }

}
