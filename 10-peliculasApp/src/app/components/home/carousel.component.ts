import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [`
  .carousel-inner{
    background: black !important;
    border: 2px solid green;
  }
`]
})
export class CarouselComponent implements OnInit {

  @Input()
  movies: any[];

  @Input()
  id: string;

  constructor() {}

  ngOnInit(): void {
  }

  showID(){
    console.log(this.id);
  }
}
