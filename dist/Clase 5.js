"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Clase 5
class GYM {
    constructor(peso, estatura) {
        this.peso = peso;
        this.estatura = estatura;
    }
    IMC() {
        let imc = 0;
        //peso (kg)/talla(m)^2
        imc = this.peso / (Math.pow(this.estatura, 2));
        console.log("El indice de masa corporal es:" + imc.toFixed(2));
    }
}
let cliente = new GYM(105, 1.76);
cliente.IMC();
//# sourceMappingURL=Clase%205.js.map