export class FileItem{
    public archivo: File;
    public nombreArchivo: string;
    public url: string;
    public uploading: boolean;
    public progreso: number;

    constructor(file: File){
        this.archivo = file;
        this.nombreArchivo = file.name;
        this.uploading = false;
        this.progreso = 0;
    }
}
