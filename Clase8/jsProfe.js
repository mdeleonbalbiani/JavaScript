//Entidades
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido
    }
}
// Variables
let personas = []
//--------------
/*
personas.push(new Persona("Julian", "Fuoco"))
personas.push(new Persona("Jose", "Ramiro"))
personas.push(new Persona("Pepe", "Pedro"))
*/
//
function mostrar(e) {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    personas.push(new Persona(nombre, apellido))
    personas.forEach(personas => {
        let p1 = document.createElement("p")
        p1.textContent = `${personas.nombre}`
        p1.setAttribute("class", "text-danger")
        let p2 = document.createElement("p")
        p2.textContent = `${personas.apellido}`
        p2.setAttribute("class", "text-primary")
        let div1 = document.createElement("div")
        div1.appendChild(p1)
        div1.appendChild(p2)
        let imprimir = document.getElementById("aca")
        imprimir.appendChild(div1)
    })
}
let boton1 = document.getElementById("btn")
boton1.addEventListener("click", mostrar)
let texto = document.getElementsByTagName("p")[0]
texto.style.backgroundColor = "red"