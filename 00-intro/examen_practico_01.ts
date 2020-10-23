
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;
const PERSONAJE:{nombre:string, edad:number} = {
  nombre: nombre,
  edad: edad
};


interface DCHero{
    nombre:string,
    artesMarciales:string[]
}

// Cree una interfaz que sirva para validar el siguiente objeto
let batman:DCHero = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}


// Convertir esta funcion a una funcion de flecha
let resultadoDoble = ( a:number, b:number) => (a + b) * 2;


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  let mensaje;
  if( poder ){
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tiene un ${arma}`
  }
};


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{
    base:number;
    altura:number;

    constructor(b:number, a:number){
        this.base = b;
        this.altura = a;
    }

    area():number{
        return this.base * this.altura;
    }
}