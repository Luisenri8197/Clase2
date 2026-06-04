/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

// const etiqueta = document.getElementById("title1")
// etiqueta.textContent = "Hola perras"
// etiqueta.style.backgroundColor = "blue"

// const imagen = document.createElement("img")
// imagen.src = "images/wwmimage1.png"
// imagen.alt = "Imagen wwm"
// imagen.width = 800

// etiqueta.after(imagen)

// Imagina que estás construyendo una pequeña aplicación de notas en HTML. Al cargar la página, un cuadro debe resaltarse automáticamente para indicar dónde escribir; el usuario puede añadir nuevas notas a una lista mediante un botón, eliminar notas específicas con otro botón, y reemplazar el contenido de un área de texto por un encabezado cuando se presione un control especial. Además, cada vez que el usuario escribe en un campo de entrada, un panel debe mostrar en tiempo real lo que está escribiendo, y existe un botón que cambia el fondo de toda la aplicación para diferenciar modos de trabajo.

const notaNueva = document.querySelector("input")
const listaItems = document.querySelector("ul")
let lista = document.getElementsByTagName("li")
const panelEscrito = document.getElementById("panel")
const bodyContainer = document.getElementById("bodyContainer")
const botonNuevaNota = document.querySelector(".agregarNota")
const botonEliminarNota = document.querySelector(".eliminarNota")
const botonEncabezado = document.querySelector(".agregarEncabezado")
const botonFondo = document.querySelector(".cambiarFondo")
const encabezado = document.createElement("h1")
encabezado.textContent = "Holaaaaa perrraaaaa"
encabezado.hidden = true
panelEscrito.hidden = true
const divPadre = document.querySelector(".divLeft")
divPadre.appendChild(encabezado)
let liObjetivo = null
let concatenar = []
notaNueva.focus()

function agregarNota(){
    if(notaNueva.value === "")return
    const nuevoItem = document.createElement("li")
    nuevoItem.style.cursor = "pointer"
    nuevoItem.textContent = notaNueva.value
    listaItems.append(nuevoItem)
    notaNueva.value = ""
    concatenar = []
    panelEscrito.hidden = true
}

function eliminarNota(){
    if(lista.length === 0) return
    if(liObjetivo === null) return
    liObjetivo.remove()
    liObjetivo = null
}

botonNuevaNota.addEventListener("click", agregarNota)

botonEliminarNota.addEventListener("click", eliminarNota)

botonEncabezado.addEventListener("click", (evento) => {
    evento.target.classList.toggle("active")
    if(evento.target.classList.contains("active")){
        encabezado.hidden = false
        notaNueva.hidden = true
    }else{
        console.log("entra al else")
        notaNueva.hidden = false
        encabezado.hidden = true
    }
})

botonFondo.addEventListener("click", (evento) => {
    evento.target.classList.toggle("active")
    if (evento.target.classList.contains("active")) {
        console.log("Entra el active")
        bodyContainer.style.backgroundColor = "black"
        bodyContainer.style.color = "white"
        if(liObjetivo){
            liObjetivo.borderColor = "white"
        }
    }else{
        console.log("Entra el desactive?")
        bodyContainer.style.backgroundColor = "white"
        bodyContainer.style.color = "black"
            if(liObjetivo){
                liObjetivo.borderColor = "black"
            }
        }
})

notaNueva.addEventListener("keypress", (evento) => {
    if(evento.key === "Enter"){
        agregarNota()
    }else{
        panelEscrito.hidden = false
        concatenar.push(evento.key)
        panelEscrito.textContent = concatenar.join("")
    }
})

listaItems.addEventListener("click", (evento) => {
    if(listaItems.length === 0){return}

    if(evento.target.tagName === "LI"){
        if(liObjetivo === evento.target){
            liObjetivo.style.border = ""
            liObjetivo = null
            return
        }

        if(liObjetivo){
            liObjetivo.style.border = ""
        }
        evento.target.style.border = "1px solid"
        liObjetivo = evento.target
    }
    
})