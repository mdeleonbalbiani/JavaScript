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
let precio = 150;

while (farmacia1.productos.length != 5) {
    farmacia1.agregarProducto(new Medicamento('Paracetamol', precio));
    precio += 50;
}

farmacia1.agregarProducto(new Medicamento('Aspirina', 500));
farmacia1.agregarProducto(new Medicamento('Buscapina', 678));

farmacia1.productos.sort((item1,item2) => {
    return item2.precio - item1.precio;
});

farmacia1.productos.map(item => console.log(item.precio));