let alumnos = [];

class Promedio{
    constructor(nombre, primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito, faltas) {
        this.nombre = nombre;
        this.primerEscrito = primerEscrito;
        this.primerParcial = primerParcial;
        this.segundoEscrito = segundoEscrito;
        this.segundoParcial = segundoParcial;
        this.tercerEscrito = tercerEscrito;
        this.faltas = faltas;
        this.promedioFinal;
    }
    calculoPromedio(){
        let promedioParciales = (this.primerParcial + this.segundoParcial)*0.75;
        let promedioEscritos = (this.primerEscrito + this.segundoEscrito + this.tercerEscrito)*0.25;
        this.promedioFinal = (promedioEscritos + promedioParciales)/2;
    }
    devolucion() {
        if (this.faltas < 22) {
            if (this.promedioFinal < 7 && this.promedioFinal >= 4) {
                return "El alumno debe rendir examen en diciembre";
            } else if (this.promedioFinal < 4) {
                return"El alumno debe rendir examen en febrero";
            } else if (this.promedioFinal > 7){
                return "El alumno aprobó la materia con nota " + this.promedioFinal;
            }
        }else{
            return "El alumno debe recursar la materia, no llego a las asistencias minimas necesarias";
        }
    }
}

//Validaciones de datos
function validacionFaltas(faltas){
    while ( (faltas < 0) || (isNaN(faltas)) || (faltas==="") ) {
        alert("Número de faltas no válido")
        faltas = parseInt(prompt("Ingrese nuevamente las faltas por favor"))
    }
    return faltas;
}
function validacionNotas(dato){
    while ( (dato < 0) || (dato > 12) || (isNaN(dato)) || (dato==="") ) {
        alert("Nota no válida");
        dato = parseInt(prompt("Ingrese una nota válida"));
    }
    return dato;
}
function validacionNombre(nombre){
    while ((!isNaN(nombre)) || (nombre==="")) {
        alert("Nombre no válido");
        nombre = prompt("Ingrese un nombre válido");
    }
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}


function mostrar(e) {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let primerEscrito = document.getElementById("primerEscrito").value;
    let primerParcial = document.getElementById("primerParcial").value;
    let segundoEscrito = document.getElementById("segundoEscrito").value;
    let segundoParcial = document.getElementById("segundoParcial").value;
    let tercerEscrito = document.getElementById("tercerEscrito").value;
    let faltas = document.getElementById("faltas").value;
    alumnos.push(new Promedio(nombre, primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito, faltas));
    alumnos.calculoPromedio();
    alumnos.forEach(alumnos => {
        let p1 = document.createElement("p")
        p1.textContent = `${alumnos.nombre}`
        let p2 = document.createElement("p")
        p2.textContent = `${alumnos.promedioFinal}`
        let p3 = document.createElement("p")
        p3.textContent = `${alumnos.devolucion()}`
        let div1 = document.createElement("div")
        div1.appendChild(p1)
        div1.appendChild(p2)
        div1.appendChild(p3)
        let imprimir = document.getElementById("aca")
        imprimir.appendChild(div1)
    })
}

let boton1 = document.getElementById("btn");
boton1.addEventListener("click", mostrar);