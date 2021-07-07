class Promedio{
    datos(nombre, primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito, faltas) {
        this.nombre = nombre;
        this.primerEscrito = primerEscrito;
        this.primerParcial = primerParcial;
        this.segundoEscrito = segundoEscrito;
        this.segundoParcial = segundoParcial;
        this.tercerEscrito = tercerEscrito;
        this.faltas = faltas;
        this.promedioFinal;
    }
    calculoPromedio(primerParcial, segundoParcial, primerEscrito, segundoEscrito, tercerEscrito){
        let promedioParciales = (primerParcial + segundoParcial)*0.75;
        let promedioEscritos = (primerEscrito + segundoEscrito + tercerEscrito)*0.25;
        this.promedioFinal = (promedioEscritos + promedioParciales)/2;
    }
}

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

function devolucion(faltas, promedioFinal) {
    if (faltas < 22) {
        if (promedioFinal < 7 && promedioFinal >= 4) {
            alert("El alumno debe rendir examen en diciembre");
        } else if (promedioFinal < 4) {
        alert("El alumno debe rendir examen en febrero");
        } else if (promedioFinal > 7){
            alert("El alumno aprobó la materia con nota " + promedioFinal);
        }
    }else{
        alert("El alumno debe recursar la materia, no llego a las asistencias minimas necesarias");
    }
}

//Definicion del array
let alumnos = [];
//Funcion para agregar dato al array
function agregar(){
    alumnos.push(nuevoAlumno);
    console.log(alumnos);
}



//Ingreso de datos
let nombre = prompt("Ingrese el nombre del alumno");
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

nuevoAlumno = new Promedio(nombre, primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito, faltas);
nuevoAlumno.calculoPromedio(primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito);
agregar();


//Devoluciones al user
alert("El promedio final del alumno es: " + nuevoAlumno.promedioFinal);
devolucion(nuevoAlumno.faltas, nuevoAlumno.promedioFinal);
