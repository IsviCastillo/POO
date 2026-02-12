class Inventario {
    id: number;
    producto: string;
    codigo: string;
    fecha: string;
    precio: number;

    constructor(id: number, producto: string, codigo: string, fecha: string, precio: number) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fecha = fecha;
        this.precio = precio;
    }


  public Agregar(precio2:number, precio3:number): void {
    console.log("Producto agregado con precio:$"+this.precio);
    console.log("Precio de descuento:$"+precio2+" y $"+precio3);
}
}

let producto = new Inventario(1, "Camisa", "C123", "2024-06-01", 25);
producto.Agregar(20, 15);
    