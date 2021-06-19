//Algoritmo con condicional simple para averiguar el estado de un ciudadano segun su edad, comparacion de Ints

const edad = parseInt(prompt("Ingrese su edad:"));
if (edad < 18) {
    alert("Eres un ciudadano pasivo, menor de edad");    
}
else if ((edad >= 18) && (edad<=60)) {
    alert("Eres un ciudadano activo");
}
else{
    alert("Eres un ciudadano pasivo, jubilado");
}

//Algoritmo con condicional simple comparando Strings
const pais = prompt("Ingrese quien ganó el partido, Uruguay o Argentina?");
if ((pais === "Uruguay") || (pais === "uruguay")) {
    alert("Lamentablemente no :( Arg 1 - 0 Uru");
}
else if ((pais === "Argentina") || (pais === "argentina")) {
    alert("Buena memoria! Arg 1 - 0 Uru")
}
else{
    alert("Esos no jugaron!")
}

//Algoritmo con condicional simple para averiguar si el numero ingresado es par o impar
const numero = parseInt(prompt("Ingrese un numero:"));
if ((numero % 2) == 0) {
    alert("Su numero es par");
}
else{
    alert("Su numero es impar");
}