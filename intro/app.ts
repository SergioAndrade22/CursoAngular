function consola(constructor:Function){
    console.log(constructor);
}


@consola
class Avenger {
    nombre:string = '';
    equipo:string = '';
    nombreReal:string = '';
    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(n:string, e:string, nr:string){
        this.nombre = n;
        this.equipo = e;
        this.nombreReal = nr;
    }
}

let antman:Avenger = new Avenger('Antman', 'cap', 'Scott Lang');

console.log(antman); 