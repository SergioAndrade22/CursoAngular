export class Marker {

    public lat: number;
    public long: number;

    public titulo: string = 'Sin Título';
    public desc: string = 'Sin descripción';

    constructor(lat: number, long: number){
        this.lat = lat;
        this.long = long;
    }
}