// class POO {
//     codigo: string;
//     nombre: string;
//     edad: number;
//     laboratorio:number;
//     parcial: number;

//     constructor(_codigo:string, _nombre:string, _edad:number, _laboratorio:number, _parcial:number){
//         this.codigo =_codigo;
//         this.nombre =_nombre;
//         this.edad =_edad;
//         this.laboratorio =_laboratorio;
//         this.parcial =_parcial;
//     }

//     public mostrarDatos():void{
//         console.log("El estudiante: " +this.nombre);
//         console.log("Codigo: " +this.codigo);
//         console.log("Tiene las siguientes notas -Laboratorio: " +this.laboratorio+ " Parcial: " +this.parcial);
//     }

//     public mostrarNotas():void{
//         console.log("Lab: " +this.laboratorio , " Parcial: " +this.parcial);
//     }

// }


class Redes{
    estudiante: string;
    laboratorio1: number;
    laboratorio2: number;
    laboratorio3: number;
    parcial1: number;
    parcial2: number;
    parcial3: number;
    notaFinal: number;

    constructor(_estudiante: string, _laboratorio1: number, _laboratorio2: number, _laboratorio3: number, _parcial1: number, _parcial2: number, _parcial3: number, _notaFinal: number){
        this.estudiante = _estudiante;
        this.laboratorio1 = _laboratorio1;
        this.laboratorio2 = _laboratorio2;
        this.laboratorio3 = _laboratorio3;
        this.parcial1 = _parcial1;
        this.parcial2 = _parcial2;
        this.parcial3 = _parcial3;
        this.notaFinal = _notaFinal;
    }
    
    CalcularNotas(): void {      
        let notaLab =(this.laboratorio1 + this.laboratorio2 + this.laboratorio3) /3;
        let notaParcial =(this.parcial1 + this.parcial2 + this.parcial3) /3;
        this.notaFinal = (notaLab * 0.6) + (notaParcial * 0.4);
       
    }
    public mostrarDatos():void{
         console.log(this.estudiante , "L1:" + this.laboratorio1 , "L2:" + this.laboratorio2 , "L3:" + this.laboratorio3 , "P1:" + this.parcial1 , "P2:" + this.parcial2 , "P3:" + this.parcial3 , "Final:" + this.notaFinal);
    }


}

//Objeto instancia POO
// let estudiante1 = new POO("u20251323", "Isvi Jose Castillo Cruz", 19, 10, 9);
// estudiante1.mostrarDatos();
// estudiante1.mostrarNotas();
//Objeto instancia Redes
let estudiante2 = new Redes("Mauricio Funes", 8, 9, 7, 6, 7, 8, 0);
estudiante2.CalcularNotas();
estudiante2.mostrarDatos();