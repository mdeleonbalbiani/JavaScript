precio = 0;
function pedirPrecio(){
    precio = parseInt(prompt("Ingrese el precio del producto:"));
}

const iva = precio => precio * 0.22;

let precioConImpuesto = (precio,iva) => precio+iva;

function mostrarPrecioConImpuesto(precioConImpuesto){
    alert("El precio de su producto con impuestos agregados es "+precioConImpuesto);
}

pedirPrecio();
mostrarPrecioConImpuesto(precioConImpuesto(precio, iva(precio)));