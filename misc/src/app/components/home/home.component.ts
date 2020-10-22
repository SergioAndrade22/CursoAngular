import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h4>ngStyle</h4>
    <app-ng-style></app-ng-style>
    <hr/>
  
    <h4>inlineCSS</h4>
    <app-css></app-css>
    <hr/>
  
    <h4>ngClasses</h4>
    <app-classes></app-classes>
    <hr/>
  
    <h4>Directivas personalizadas</h4>
    <p [appResaltado]="'blue'">
        Hola Mundo desde home.component
    </p>
    <hr/>
  
    <h4>ngSwitch</h4>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() {
    console.log("Se ejecuta el constructor")
   }

  ngOnInit(): void {
    console.log("Se ejecuta el hook: " + "ngOnInit")
  }
  
  ngOnChanges(): void{
    console.log("Se ejecuta el hook: " + "ngOnChanges")
  }
  
  ngDoCheck(): void{
    console.log("Se ejecuta el hook: " + "ngDoCheck")
  }
  
  ngAfterContentInit(): void{
    console.log("Se ejecuta el hook: " + "ngAfterContentInit")
  }
  
  ngAfterContentChecked(): void{
    console.log("Se ejecuta el hook: " + "ngAfterContentCheck")
  }
  
  ngAfterViewInit(): void{
    console.log("Se ejecuta el hook: " + "ngAfterViewInit")
  }
  
  ngAfterViewChecked(): void{
    console.log("Se ejecuta el hook: " + "ngAfterViewChecked")
  }
  
  ngOnDestroy(): void{
    console.log("Se ejecuta el hook: " + "ngOnDestroy")
  
  }
}
