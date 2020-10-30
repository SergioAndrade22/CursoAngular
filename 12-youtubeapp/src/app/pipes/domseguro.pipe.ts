import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  
  url: string = 'https://www.youtube.com/embed/';

  constructor(private domSanitizer: DomSanitizer){}

  transform(uri: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.url + uri);
  }

}
