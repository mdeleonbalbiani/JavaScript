
const submitButton = $("#submit-btn");

let timeout = null;
    //Objeto para validacion de errores en input y usarlo para habilitación de boton
let errors = {
    nombre: true,
    primerEscrito: true,
    primerParcial: true,
    segundoEscrito: true,
    segundoParcial: true,
    tercerEscrito: true,
    faltas: true,
}

document.querySelectorAll('.form-box').forEach((box) => {
  const boxInput = box.querySelector('input');

  boxInput.addEventListener('keydown', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`Input: ${boxInput.name} value: `, boxInput.value);
      validation(box, boxInput);
    }, 300);
  });
});

    //Funcion para validacion de inputs
validation = (box, boxInput) => {
    if (boxInput.name == 'nombre') {
        if ((!isNaN(boxInput.value)) || (boxInput.value==="")) {
            showError(true, box, boxInput);
          } else {
            showError(false, box, boxInput);
          }
    }

    if (boxInput.name == 'primerEscrito') {
        if ((boxInput.value < 0) || (boxInput.value > 12) || (isNaN(boxInput.value)) || (boxInput.value==="")) {
            showError(true, box, boxInput);
          } else {
            showError(false, box, boxInput);
          }
    }

    if (boxInput.name == 'primerParcial') {
        if ((boxInput.value < 0) || (boxInput.value > 12) || (isNaN(boxInput.value)) || (boxInput.value==="")) {
            showError(true, box, boxInput);
          } else {
            showError(false, box, boxInput);
          }
    }

    if (boxInput.name == 'segundoEscrito') {
        if ((boxInput.value < 0) || (boxInput.value > 12) || (isNaN(boxInput.value)) || (boxInput.value==="")) {
            showError(true, box, boxInput);
          } else {
            showError(false, box, boxInput);
          }
    }

    if (boxInput.name == 'segundoParcial') {
        if ((boxInput.value < 0) || (boxInput.value > 12) || (isNaN(boxInput.value)) || (boxInput.value==="")) {
            showError(true, box, boxInput);
          } else {
            showError(false, box, boxInput);
          }
    }

    if (boxInput.name == 'tercerEscrito') {
        if ((boxInput.value < 0) || (boxInput.value > 12) || (isNaN(boxInput.value)) || (boxInput.value==="")) {
            showError(true, box, boxInput);
          } else {
            showError(false, box, boxInput);
          }
    }

    if (boxInput.name == 'faltas') {
        if ((boxInput.value < 0) || (isNaN(boxInput.value)) || (boxInput.value==="") || (boxInput.value > 999)) {
            showError(true, box, boxInput);
          } else {
            showError(false, box, boxInput);
          }
    }
        //Llamada de la funcion para habilitar/deshabilitar boton
    submitController();
};

    //Funcion para agregar clases de error o success
showError = (check, box, boxInput) => {
  if (check) {
    box.classList.remove('form-success');
    box.classList.add('form-error');
    errors[boxInput.name] = true;
  } else {
    box.classList.remove('form-error');
    box.classList.add('form-success');
    errors[boxInput.name] = false;
  }
};

    //Funcion para habilitar o deshabilitar el boton
function submitController(){
    if (errors.nombre|| errors.primerEscrito || errors.primerParcial || errors.segundoEscrito || errors.segundoParcial || errors.tercerEscrito || errors.faltas) {
        submitButton.attr('disabled', true)
    } else {
        submitButton.attr('disabled', false)
    }
}

    //Declaracion del array
let alumnos = [];

    //Creacion de la clase contructora con sus funciones
class Promedio{
    constructor(nombre, primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito, faltas) {
        this.nombre = nombre;
        this.primerEscrito = Number(primerEscrito);
        this.primerParcial = Number(primerParcial);
        this.segundoEscrito = Number(segundoEscrito);
        this.segundoParcial = Number(segundoParcial);
        this.tercerEscrito = Number(tercerEscrito);
        this.faltas = Number(faltas);
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
function mostrar(e) {
        //Previene que se refresque la página
    e.preventDefault();
        //Lectura de valores de cada input y se guardan en variables
    let nombre = $("#nombre").val();
    let primerEscrito = $("#primerEscrito").val();
    let primerParcial = $("#primerParcial").val();
    let segundoEscrito = $("#segundoEscrito").val();
    let segundoParcial = $("#segundoParcial").val();
    let tercerEscrito = $("#tercerEscrito").val();
    let faltas = $("#faltas").val();
        //Se crea un nuevo objeto de tipo Promedio, y este se pushea al array alumnos
    alumnos.push(new Promedio(nombre, primerEscrito, primerParcial, segundoEscrito, segundoParcial, tercerEscrito, faltas));
    
    alumnos.forEach(alumnos => {
        alumnos.calculoPromedio();

        $("#imprimir").append(
            `   <p> ${alumnos.nombre} </p>
                <p> Promedio: ${alumnos.promedioFinal} </p>
                <p> Devolución: ${alumnos.devolucion()} </p>    `);
    })


    $("textoExito").fadeIn();
}

    //Se agrega evento submit y se ejecutará solo 1 vez
submitButton.one("click", mostrar);

