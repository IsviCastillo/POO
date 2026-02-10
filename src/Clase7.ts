//Ejercicio 1 . Clase 7 [Public]

// class Usuario{
//     public nombre:string;

//     constructor(nombre:string){
//         this.nombre = nombre;
//     }
// }
// const u = new Usuario("Jose");
// console.log(u.nombre);

//Ejercicio 2 . Clase 7 [Private]

// class Usuario{
//     private password:string;

//     constructor(pass:string){
//         this.password = pass;
//     }
    
//     validar(pass:string):boolean{
//         return this.password === this.password; // Aquí se compara la contraseña ingresada con la contraseña almacenada en la clase
//     }
// }
// const u = new Usuario("1234");
// console.log(u.validar("1234")); // true

// //Ejercicio 3 . Clase 7 [Protected]
// class Persona {
//     protected edad: number;

//     constructor(edad: number) {
//         this.edad = edad;
//     }
// }
// class Estudiante extends Persona {
//     mostrarEdad(): number {
//         return this.edad;
//     }
// }
// const e = new Estudiante(20);
// console.log(e.mostrarEdad()); // 20





// Ejercicio 1: Usuario y validación de acceso

// class Usuario {
//   public username: string;
//   private password: string;

//   constructor(username: string, password: string) {
//     this.username = username;
//     this.password = password;
//   }

//   login(pass: string): string {
//     if (pass === this.password) {
//       return "Acceso concedido";
//     } else {
//       return "Contraseña incorrecta";
//     }
//   }
// }
// const usuario1 = new Usuario("admin", "1234");
// console.log(usuario1.login("1234"));



// Ejercicio 2: Producto con control de precio
// Enunciado
// Crea una clase Producto con:


// class Producto {
//   constructor(
//     public nombre: string,
//     private precio: number
//   ) {}

//   evaluarPrecio(): string {
//     if (this.precio < 10) {
//       return "Producto barato";
//     } else if (this.precio <= 50) {
//       return "Precio normal";
//     } else {
//       return "Producto caro";
//     }
//   }
// }
// const producto1 = new Producto("Chaqueta", 45);
// console.log(producto1.evaluarPrecio());


// Ejercicio 3: Empleado y herencia (protected)
// Crea una clase Empleado con:


// class Empleado {
//   constructor(
//     public nombre: string,
//     protected salario: number
//   ) {}
// }

// class Gerente extends Empleado {
//   bono(): number {
//     if (this.salario > 1000) {
//       return this.salario * 0.2;
//     } else {
//       return this.salario * 0.1;
//     }
//   }
// }
// const gerente1 = new Gerente("Messi", 1600);
// console.log("Bono del gerente: " + gerente1.bono());



// Ejercicio 4: Sistema de roles con switch


// class Sistema {
//   verificarRol(rol: string): string {
//     switch (rol) {
//       case "admin":
//         return "Acceso total";
//       case "editor":
//         return "Acceso limitado";
//       case "usuario":
//         return "Acceso básico";
//       default:
//         return "Rol no válido";
//     }
//   }
// }
// const sistema = new Sistema();
// console.log(sistema.verificarRol("admin"));


// Ejercicio 5: Cuenta bancaria (ejercicio completo)

class CuentaBancaria {
  constructor(
    public titular: string,
    private saldo: number
  ) {}

  operacion(tipo: string, monto: number): string {
    switch (tipo) {
      case "depositar":
        this.saldo += monto;
        return `Saldo actual: ${this.saldo}`;

      case "retirar":
        if (monto > this.saldo) {
          return "Fondos insuficientes";
        } else {
          this.saldo -= monto;
          return `Saldo actual: ${this.saldo}`;
        }

      default:
        return "Operación no válida";
    }
  }
}
const cuenta1 = new CuentaBancaria("Laura", 1010);
console.log(cuenta1.operacion("depositar", 500)); 