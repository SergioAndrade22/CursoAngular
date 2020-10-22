import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado")
  nuevoColor: string;


  constructor(private elref: ElementRef) {}
  
  @HostListener('mouseenter') mouseEnter(){
    this.resaltar(this.nuevoColor || "yellow");
  }

  @HostListener('mouseleave') mouseLeave(){
    this.resaltar(null);
  }

  private resaltar(color: string){
    this.elref.nativeElement.style.backgroundColor = color;
  }
}
