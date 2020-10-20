import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultador'
})
export class OcultadorPipe implements PipeTransform {

  transform(value: string, hide:boolean = true ): string{
    let toRet:string = '*'.repeat(value.length);
    return hide ? toRet : value;
  }

}