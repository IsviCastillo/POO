
import * as readline from "readline";

class Programa {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
//Ejemplo
//     iniciar(): void {
//         this.pedirNumero();
//     }

//     pedirNumero(): void {
//         this.rl.question("Ingresa un número: ", (respuesta: string) => {
//             const numero = Number(respuesta);
//             this.evaluarNumero(numero);
//             this.cerrar();
//         });
//     }

//     evaluarNumero(numero: number): void {
//         if (numero > 10) {
//             console.log("Es mayor que 10");
//         } else if (numero === 10) {
//             console.log("Es igual a 10");
//         } else {
//             console.log("Es menor que 10");
//         }
//     }

//     cerrar(): void {
//         this.rl.close();
//     }
// }

// const app = new Programa();
// app.iniciar();

// Ejercicio 1.


    // iniciar(): void {
    //     this.pedirNota();
    // }

    // pedirNota(): void{
    //     this.rl.question("Ingrese la nota del estudiante: ", (respuesta: string) => {
    //         const nota = Number(respuesta);
    //         this.evaluarNota(nota);
    //         this.cerrar();
    //     });
    // }

    // evaluarNota(nota: number): void {
    //     if(nota >= 9 && nota <= 10){
    //         console.log("Excelente");
    //     }else if(nota >= 7 && nota < 9){
    //         console.log("Bueno");
    //     }else if(nota >= 6 && nota < 7){
    //         console.log("Regular");
    //     }else if(nota < 6){
    //         console.log("Reprobado");
    //     }
    //     }
    //     cerrar(): void {
    //         this.rl.close();
    //     }
    // }

    // const app = new Programa();
    // app.iniciar();


// Ejercicio 2.
    iniciar(): void {
        this.validUsuario();
    }

    validUsuario(): void {
        this.rl.question("Ingrese su usuario: ", (usuario: string) => {
            this.rl.question("Ingrese su contraseña: ", (contraseña: string) => {
                if (usuario === "Administrador" && contraseña === "admin123") {
                    console.log("Accedes como Administrador.");
                } else if (usuario === "Cliente" && contraseña === "cliente123") {
                    console.log("Accedes como Cliente.");
                } else if (usuario === "Invitado" && contraseña === "invitado123") {
                    console.log("Accedes como Invitado.");
                } else {
                    console.log("Usuario incorrecto.");
                }
                this.cerrar();
            });
        });
    }

    cerrar(): void {
        this.rl.close();
    }
}

const app = new Programa();
app.iniciar();
