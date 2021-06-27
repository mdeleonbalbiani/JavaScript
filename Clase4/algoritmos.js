let promedioFinal = 0;

function promedio(primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito){
    let promedioParciales = (primerParcial+segundoParcial)*0.75;
    let promedioEscritos = (primerEscrito + segundoEscrito + tercerEscrito)*0.25;
    return promedioFinal = (promedioEscritos + promedioParciales)/2;
    alert(promedioFinal);
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

const primerEscrito = parseInt(prompt("Ingrese la nota del primer escrito"));
const primerParcial = parseInt(prompt("Ingrese la nota del primer parcial"));
const segundoEscrito = parseInt(prompt("Ingrese la nota del segundo escrito"));
const segundoParcial = parseInt(prompt("Ingrese la nota del segundo parcial"));
const tercerEscrito = parseInt(prompt("Ingrese la nota del tercer escrito"));
const faltas = parseInt(prompt("Ingrese la cantidad de faltas que tuvo el alumno"));

alert("El promedio final del alumno es: " + promedio(primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito));
alert("La devolución del alumno es: " + devolucion(promedioFinal, faltas));