function ingresoDeDatos(dato){
    while (((dato>12) || (dato==="") || (isNaN(dato)))) {
        alert("Nota no válida");
        dato = parseInt(prompt("Ingrese una nota válida"));
    }
    /* if ((dato>12) || (dato==="") || (isNaN(dato))) {
        alert("Nota no válida");
        dato = parseInt(prompt("Ingrese una nota válida"));
    } */
}

let primerEscrito = parseInt(prompt("Ingrese la nota del primer escrito"));
ingresoDeDatos(primerEscrito);
let primerParcial = parseInt(prompt("Ingrese la nota del primer parcial"));
ingresoDeDatos(primerParcial);
let segundoEscrito = parseInt(prompt("Ingrese la nota del segundo escrito"));
ingresoDeDatos(segundoEscrito);
let segundoParcial = parseInt(prompt("Ingrese la nota del segundo parcial"));
ingresoDeDatos(segundoParcial);
let tercerEscrito = parseInt(prompt("Ingrese la nota del tercer escrito"));
ingresoDeDatos(tercerEscrito);
const faltas = parseInt(prompt("Ingrese la cantidad de faltas que tuvo el alumno"));

let promedioFinal = 0;
let promedioParciales = (primerParcial+segundoParcial)*0.75;
let promedioEscritos = (primerEscrito + segundoEscrito + tercerEscrito)*0.25;

function promedio(promedioEscritos, promedioParciales){
    promedioFinal = (promedioEscritos + promedioParciales)/2;
    return promedioFinal;
}

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

alert("El promedio final del alumno es: " + promedio(promedioEscritos, promedioParciales));
alert("La devolución del alumno es: " + devolucion(promedioFinal, faltas));