//Ejercicio 1 . Clase 5
// class GYM {
//     peso: number;
//     estatura: number;

//     constructor(peso: number, estatura: number) {
//         this.peso = peso;
//         this.estatura = estatura;
//     }

//     public IMC(): number {
//         return this.peso / (this.estatura ** 2);
//     }

//     public interpretarIMC(): void {
//         const imc = this.IMC();
//         console.log("El índice de masa corporal es: " + imc.toFixed(2));

//         if (imc < 18.5) {
//             console.log("Bajo peso");
//         } else if (imc <= 24.9) {
//             console.log("Peso normal");
//         } else if (imc <= 29.9) {
//             console.log("Sobrepeso");
//         } else {
//             console.log("Obesidad");
//         }
//     }
// }

// let cliente = new GYM(105, 1.76);
// cliente.interpretarIMC();

//Ejercicio 2 . Clase 5

// class ConversorTemperatura {
//     temperatura: number;

//     //Mostrar un valor en las tres unidades de temperatura, aplicando su formula correspondiente.
//     constructor(temperatura: number) {
//         this.temperatura = temperatura;
//     }

//     public FahrenheitToCelcius():number {
//         return (this.temperatura - 32) * 5/9;
//     }

//     public CelciusToFahrenheit():number {
//         return (this.temperatura * 9/5) + 32;
//     }
//     public KelvinToCelcius():number {
//         return this.temperatura - 273.15;
//     }
//     public CelciusToKelvin():number {
//         return this.temperatura + 273.15;
//     }
// }

// let valorT = new ConversorTemperatura(100);
// console.log("De Fahrenheit a Celcius: " + valorT.FahrenheitToCelcius().toFixed(2));
// console.log("De Celcius a Fahrenheit: " + valorT.CelciusToFahrenheit().toFixed(2));
// console.log("De Kelvin a Celcius: " + valorT.KelvinToCelcius().toFixed(2));
// console.log("De Celcius a Kelvin: " + valorT.CelciusToKelvin().toFixed(2));

//Ejercicio 3 . Clase 5

class Instituto{
    falta:number;
    estudiante :string;

    constructor(falta:number, _estudiante:string){
        this.falta = falta;
        this.estudiante = _estudiante;

    }


    public seleccion ():void{
        console.log("Estudiante: " + this.estudiante);
        if(this.falta ==1){
            console.log("Llegada tardía, debe $1.")
        }else if(this.falta ==2){
            console.log("Caminar por los pasillos en horas de clase , debe $3.")
        }else if(this.falta ==3){
            console.log("o andar vestimenta apropiada, debe $5.")
        }else if(this.falta==4){
            console.log("No hacer uso adecuado de las instalaciones, debe $10.")
        }else{
            console.log("Falta no registrada.")

        }

    }     

}
let alumno = new Instituto(2, "Juanito Sanchez");
alumno.seleccion();
