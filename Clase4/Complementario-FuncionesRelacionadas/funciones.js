let precio = 0;
let precioConImpuesto = 0;

function pedirPrecio(){
    precio = parseInt(prompt("Ingrese el precio del producto:"));
}

function calcularIVA(precio){
    let impuesto = precio*0.22;
    precioConImpuesto = (precio+impuesto);
    return precioConImpuesto;
}

function mostrarPrecioConImpuesto(precioConImpuesto){
    alert("El precio final de su producto es: "+precioConImpuesto);
}

pedirPrecio();
calcularIVA(precio);
mostrarPrecioConImpuesto(precioConImpuesto);