//Objetos

//------- Prototipos y Herencia ------

let personaConObject = new Object()

personaConObject.nombre = "Liz";
personaConObject.edad = 30;

console.log(personaConObject)

let personaEstandar = {
    nombre: "Luis",
    edad: 35,
    saludar: function(){
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}
console.log(personaEstandar)

function ConstructorPersona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

const personaConConstructor = new ConstructorPersona("Tulio", 40)
console.log(JSON.stringify(personaConConstructor))
console.log(personaConConstructor.nombre)

class CrearPersonaConClass{
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const personaClass = new CrearPersonaConClass("Yurlis", 10)
console.log(JSON.stringify(personaClass))

personaEstandar.imprimirEdad = function(){
    console.log(`${this.nombre} tiene ${this.edad}`)
}

personaEstandar.imprimirEdad()
console.log(personaEstandar)

// ------- Herencia -----

let programador = Object.create(personaEstandar)
console.log("A partir de esta impresión los siguientes son de programador OJO")
programador.imprimirEdad()
console.log(programador)
programador.nombre = "Juanita";
programador.edad = 40;
programador.saludar()
console.log(programador)
console.log(Object.getPrototypeOf(programador))

//---- Métodos estáticos e Instancia ------

//Remitirse a la línea 20, definir objeto con contructor

ConstructorPersona.prototype.dobleEdad = function() {
    let edadDuplicada = this.edad * 2;
    console.log(`El doble de la edad de ${this.nombre} es ${edadDuplicada}`)
}
personaConConstructor.dobleEdad()

//----- métodos avanzados ----

//assign

let persona_nucleo = {nombre: "Tutancamon"}
let persona_detalles = {edad: 40, alias: "El rey de egipto"}

let personaCompleta = Object.assign(persona_nucleo, persona_detalles)
console.log(personaCompleta)

//keys, values, entries

console.log(Object.keys(personaCompleta))
console.log(Object.values(personaCompleta))
console.log(Object.entries(personaCompleta))

//------------------------- Clases avanzadas -------------------------

class PersonaClase {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}

const usuarioClass = new PersonaClase("Tania", 50)

usuarioClass.saludar()

//--- abstracciones ----

//Clases abstractas

class Animal{
    constructor(nombre){
        if(new.target === Animal){
            throw new Error ("No se puede inicializar clase abstracta")
        }
        this.nombre = nombre;
    }
    hacerSonido(){
        throw new Error ("No se puede acceder a dicho método directamente")
    }
}

//Polimorfismo

class Gato extends Animal{
    hacerSonido(){
        console.log("Miau! Ijopta")
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log("Guau! Ijopta")
    }
}

const gato = new Gato("Gatito")
const perro = new Perro("Perrito")

gato.hacerSonido()
console.log(gato)
perro.hacerSonido()
console.log(perro)

// Mixins -- Compartir funcionalidades entre clases

const volarMixin = {
    volar(){
        console.log(`${this.nombre} esta volando de lo marihuano que anda`)
    }
}

class ave extends Animal{
    hacerSonido(){
        console.log("Kyaa! yametekudasai")
    }
}

Object.assign(ave.prototype, volarMixin)

const pajaro = new ave("Gorrión")
console.log(pajaro)
pajaro.hacerSonido()
pajaro.volar()

// Patrones singletones

