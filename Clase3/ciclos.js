//Algoritmo 1
for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (isNaN(numero)) {
        alert("Pedimos un número!");
    }
    else{
        alert("Su número "+numero+" + 2 = " +(numero+2) + "\nRepeticiones "+i+"/10");
    }   
}

//Algortimo 2
let nombre = prompt("Ingrese un nombre: ");
while (nombre != "ESC") {
    if ((nombre == "") || (!isNaN(nombre))) {
        alert("No es un nombre válido!");
    }
    else{
        alert("Hola "+nombre+"! Bienvenido a este bucle while!");
    }
    nombre = prompt("Ingrese otro nombre: ");
}

//Algoritmo 3
let numeroDeRepeticiones = prompt("Ingrese un numero:");
alert("En consula tenemos 'Hola' repetido "+numeroDeRepeticiones+" veces!");
for (let i = 0; i < numeroDeRepeticiones; i++) {
    console.log("Hola");
}