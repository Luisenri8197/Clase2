// DOM Document Object Model

// Selección de elementos

// Métodos básicos

const parrafo = document.getElementById("id")
const elementsClass = document.getElementsByClassName("clase1")
const elementsTag = document.getElementsByTagName("tag")

// Métodos más modernos

const elementQuery = document.querySelector(".paragraph")
const elementQueryAll = document.querySelectorAll(".paragraph")

// Manipulación de elementos

const title = document.getElementById("title")
title.textContent = "Su mamita la mocha"

const container = document.querySelector("container")
container.innerHTML = "<p>Su mamita la maocha</p>"

// Modificación de atributos (selectores CSS)

const link = document.querySelector("a")
const url = link.getAttribute("href")
link.setAttribute("href", "https://example.com")

//Comprobacion de un atributos

const hasTarget = link.hasAttribute("target")

//Eliminación de atributos
const eliminarAtributo = link.removeAttribute("target")

//Interacción clases CSS

const box = document.querySelector(".box")
box.classList.add("selected")
box.classList.remove("selected")
box.classList.toggle("selected")

const button = document.querySelector("button")
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "10px"

// Creación y eliminación de elementos

const newParagraph = document.createElement("p")
newParagraph.textContent = "Su mamita la mocha"
newParagraph.style.padding = "8px"
container.appendChild(newParagraph)

const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "Item de la lista perra"

//Inserción lugar concreto

const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem, secondItem) // Inserta después del elemento que le indicamos en el segundo argumento

itemsList.append(newItem) // Inserta al final del listado
itemsList.prepend(newItem) // Inserta al principio del listado
secondItem.before(newItem) //Inserta antes edl item indicado
secondItem.after(newItem)// Inserta después del item indicado

// Eliminar

newParagraph.remove()

//Eliminación tradicional

const parent = newParagraph.parentElement
parent.removeChild(newParagraph)

// Elementos del DOM

function message(){
    alert("Eres una chupona")
}

const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", message)
sendButton.addEventListener("click", () => {
    alert("Sos una chupona")
})

//Eventos comunes

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Cargado")
})

sendButton.addEventListener("mouseenter", () =>{
    sendButton.style.backgroundColor = "green"
    console.log("Sos la chupona mayor")
})

sendButton.addEventListener("mouseleave", () =>{
    sendButton.style.backgroundColor = "red"
    console.log("Sos la chupona menor")
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    //Codigo...
})