class Medicamento{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Farmacia {
    constructor(nombre){
        this.nombre = nombre;
        this.productos = [];
    }
    agregarProducto(producto){
        this.productos.push(producto);
    }
}

const farmacia1 = new Farmacia();

farmacia1.agregarProducto(new Medicamento('Aspirina', 500));
farmacia1.agregarProducto(new Medicamento('Buscapina', 678));
farmacia1.agregarProducto(new Medicamento('Paracetamol', 100));
farmacia1.agregarProducto(new Medicamento('Omeprazol', 440));
farmacia1.agregarProducto(new Medicamento('Sabutamol', 265));

farmacia1.productos.sort((item1,item2) => {
    return item2.precio - item1.precio;
});

farmacia1.productos.map(item => console.log(item.precio));