"use strict";
//Clase 1: Introducción a TypeScript
// let mensaje: string = "POO con TypeScript desde cero";
// console.log(mensaje);
Object.defineProperty(exports, "__esModule", { value: true });
// Representar una persona con datos básicos y una acción que describe quién es.
// //Ejercicio 1
// let persona = {
//      nombre: "Isvi",
//      edad: 19,
//      ocupacion: "Estudiante",
//      describirse: function()
//      {
//          console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.ocupacion}.`);
//      }
//  }
//  persona.describirse();
//Ejercicio 2
//  let producto: {
//      nombre: string;
//      precio: number;
//      cantidad: number;
//      disponible: boolean;
//  } = {
//      nombre: "Televisor",
//      precio: 1500,
//      cantidad: 3,
//      disponible: true
//  };
//  mostrarProducto(producto);
//  function mostrarProducto(prod: { nombre: string; precio: number; cantidad: number; disponible: boolean; }) {
//     console.log(`Producto: ${prod.nombre}`);
//     console.log(`Precio: $${prod.precio}`);
//     console.log(`Cantidad: ${prod.cantidad}`);
//     console.log(`Disponible: ${prod.disponible ? "Sí" : "No"}`);
// }
//Ejercicio 3
//3. Simular una cuenta bancaria donde el saldo cambia según una acción.
//  let cuentaBank = {
//      Titular: "Josesito",
//      Banco: "American Express",
//      Saldo : 1500000000,
//  }
//  function actualizarSaldo(cuenta: { Titular: string; Banco: string; Saldo: number; }, accion: string, monto: number): void { 
//      if (accion === "depositar") {
//          cuenta.Saldo += monto;
//          console.log(`Depósito de $${monto} realizado. Nuevo saldo: $${cuenta.Saldo}`);
//      } else if (accion === "retirar") {
//          if (monto > cuenta.Saldo) {
//              console.log("Fondos insuficientes para retirar.");
//          } else {
//              cuenta.Saldo -= monto;
//              console.log(`Retiro de $${monto} realizado. Nuevo saldo: $${cuenta.Saldo}`);
//          }
//      } else {
//          console.log("La accion no es válida. Use 'depositar' o 'retirar'.");
//      }
//  }
//  actualizarSaldo(cuentaBank, "depositar", 500000);
//  actualizarSaldo(cuentaBank, "retirar", 2000000);
//  actualizarSaldo(cuentaBank, "retirar", 2000000000);
// //Clase 5
// class GYM {
//     peso: number;
//     estatura: number;
//     constructor(peso: number, estatura: number) {
//         this.peso = peso;
//         this.estatura = estatura;
//     }
//      public IMC(): void {
//         let imc =  0;
//         //peso (kg)/talla(m)^2
//         imc = this.peso / (this.estatura ** 2);
//         console.log("El indice de masa corporal es:" + imc);
//     }
// }
// let cliente = new GYM(105, 1.76);
// cliente.IMC();
//# sourceMappingURL=index.js.map