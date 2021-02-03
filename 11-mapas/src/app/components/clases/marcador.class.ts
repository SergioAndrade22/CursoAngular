export class Marker {

    public lat: number;
    public long: number;

    public titulo = 'Sin Título';
    public desc = 'Sin descripción';

    constructor(lat: number, long: number){
        this.lat = lat;
        this.long = long;
    }
}
