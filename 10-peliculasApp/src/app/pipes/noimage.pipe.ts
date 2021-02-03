import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: string): string {
    return (image) ? `http://image.tmdb.org/t/p/w342//${image}` : '/assets/img/noimage.png';
  }
}
