import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input()
  archivos: FileItem[] = [];

  @Output()
  mouseHover: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any): void {
    this.mouseHover.emit(true);
    this.prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragExit( event: any): void {
    this.mouseHover.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop( event: any): void {

    const transfer = this.getTransfer(event);

    if (transfer){
      this.getFiles(transfer.files);
    }

    this.prevenirDetener(event);
    this.mouseHover.emit(false);
  }

  private getTransfer(event: any): any{ // this function is used only to extend compatibility to different browser
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private getFiles(archivosLista: FileList): void {
    for (const prop in Object.getOwnPropertyNames(archivosLista)){
      const temp = archivosLista[prop];

      if (this._archivoPuedeSerCargado(temp)){
        const newFile = new FileItem(temp);
        this.archivos.push(newFile);
      }
    }
    console.log(this.archivos);
  }

  // Validations

  private _archivoPuedeSerCargado(archivo: File): boolean{
    if (!this._fileAlreadyDropped(archivo.name) && this._esImagen(archivo.type)){
      return true;
    } else{
      return false;
    }
  }

  private prevenirDetener(event): void { // prevents default dropping behaviour
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileAlreadyDropped(nombreArchivo: string): boolean{
    for (const file of this.archivos){
      if (file.nombreArchivo === nombreArchivo){
        console.log(`El archivo ${nombreArchivo} ya está agregado.`);
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoArchivo: string): boolean{
    return (tipoArchivo === '' || undefined ) ? false : tipoArchivo.startsWith('image');
  }
}
