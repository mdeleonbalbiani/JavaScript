//Ingreso de datos
let primerEscrito = parseInt(prompt("Ingrese la nota del primer escrito"));
primerEscrito = validacionNotas(primerEscrito);
let primerParcial = parseInt(prompt("Ingrese la nota del primer parcial"));
primerParcial = validacionNotas(primerParcial);
let segundoEscrito = parseInt(prompt("Ingrese la nota del segundo escrito"));
segundoEscrito = validacionNotas(segundoEscrito);
let segundoParcial = parseInt(prompt("Ingrese la nota del segundo parcial"));
segundoParcial = validacionNotas(segundoParcial);
let tercerEscrito = parseInt(prompt("Ingrese la nota del tercer escrito"));
tercerEscrito = validacionNotas(tercerEscrito);
let faltas = parseInt(prompt("Ingrese la cantidad de faltas que tuvo el alumno"));
faltas = validacionFaltas(faltas);

//Validaciones de ingreso
function validacionFaltas(faltas){
    while ((isNaN(faltas)) || (faltas<0) || (faltas==="")) {
        alert("Número de faltas no válido")
        faltas = parseInt(prompt("Ingrese nuevamente las faltas por favor"))
    }
    return faltas;
}

function validacionNotas(dato){
    while (((dato>12) || (dato==="") || (isNaN(dato)))) {
        alert("Nota no válida");
        dato = parseInt(prompt("Ingrese una nota válida"));
    }
    return dato;
}

//Funciones para realizar las operaciones necesarias
let promedioFinal = 0;
let promedioParciales = 0;
promedioParciales = parciales(primerParcial, segundoParcial);
let promedioEscritos = 0;
promedioEscritos = escritos(primerEscrito, segundoEscrito, tercerEscrito);

function parciales(primerParcial, segundoParcial){
    promedioParciales = (primerParcial + segundoParcial)*0.75;
    return promedioParciales;
}

function escritos(primerEscrito, segundoEscrito, tercerEscrito) {
    promedioEscritos = (primerEscrito + segundoEscrito + tercerEscrito)*0.25;
    return promedioEscritos;
}

function promedio(promedioEscritos, promedioParciales){
    promedioFinal = (promedioEscritos + promedioParciales)/2;
    return promedioFinal;
}

//Funcion para devolver un juicio al user
function devolucion(promedioFinal, faltas){
    switch (true) {
        case faltas>22:
            alert("El alumno debe recursar la materia, no llego a las asistencias minimas necesarias");
            break;
        case promedioFinal<7 && promedioFinal>=4:
            alert("El alumno debe rendir examen en diciembre");
            break;
        
        case promedioFinal<4:
            alert("El alumno debe rendir examen en febrero");
            break;

        case promedioFinal>7:
                alert("El alumno aprobó la materia con nota " + promedioFinal);
                break;
        default:
            alert("Error");
            break;
    }
}

//Devoluciones al user
alert("El promedio final del alumno es: " + promedio(promedioEscritos, promedioParciales));
alert("La devolución del alumno es: " + devolucion(promedioFinal, faltas));
