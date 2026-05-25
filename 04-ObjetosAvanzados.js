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

// ------- Patrones de Diseño --------

//Singleton

class Sesion{
    constructor(nombre){
        if(Sesion.instance){
            return Sesion.instance;
        }
        this.nombre = nombre;
        Sesion.instance = this
    }
    saludar() {
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

const sesionLuis = new Sesion("Luisito")
const sesionLuis2 = new Sesion("Carlos")
console.log("Es la sesión 1 y 2 igual?: " + (sesionLuis===sesionLuis2))
sesionLuis.saludar()
sesionLuis2.saludar()

//Symbol

const ID = Symbol("id")

class usuario {
    constructor(nombre){
        this.nombre = nombre;
        this[ID] = Math.random(); 
    }
}

const usuario1 = new usuario("Camila")
console.log(usuario1.nombre)
console.log(usuario1.ID)

// instanceOf

class Carro {}

const camion = new Carro("Renoult")
console.log("camion es instancia de Carro?: " + (camion instanceof Carro))

//Create

const sedan = Object.create(Carro.prototype)
console.log("sedan es instancia de Carro?: " + (sedan instanceof Carro))

//proxy Inteceptar y modificar el comportamiento de las clases

const ClaseProxy = {
    get(target, propiedad){
        console.log(`Es es el get con la propiedad ${propiedad}`)
        return target[propiedad]
    },
    set (target, propiedad, valor){
        if(propiedad === "balance" && valor < 0){
            throw new Error("Esta cuenta bancaria no puede estár en negativos mi perro")
        }
        target[propiedad] = valor
    }
}

class CuentaBanco {
    constructor(balance){
        this.balance = balance;
    }
}

const cuentaLuis = new CuentaBanco(100);
console.log(cuentaLuis.balance)
const cuentaProxy = new Proxy(new CuentaBanco(200), ClaseProxy)
console.log(cuentaProxy.balance)
cuentaProxy.balance = 100
console.log(cuentaProxy.balance)