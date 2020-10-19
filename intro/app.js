"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
var Avenger = /** @class */ (function () {
    function Avenger(n, e, nr) {
        this.nombre = '';
        this.equipo = '';
        this.nombreReal = '';
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = n;
        this.equipo = e;
        this.nombreReal = nr;
    }
    Avenger = __decorate([
        consola
    ], Avenger);
    return Avenger;
}());
var antman = new Avenger('Antman', 'cap', 'Scott Lang');
console.log(antman);
