/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agrega una función al prototipo de un objeto

// Enunciado tirado por Copilot
/*
Ejercicio: Prototipos y formas de instanciar objetos en JavaScript

Objetivo:
- Crear una clase llamada Vehiculo con la propiedad 'marca'.
- Agregar al prototipo de Vehiculo una función llamada 'arrancar' que muestre un mensaje en consola indicando que el vehículo de cierta marca está arrancando.
- Instanciar objetos de Vehiculo utilizando TODAS las formas posibles de crear objetos en JavaScript:
    1. Usando la sintaxis de clase con 'new Vehiculo(...)'.
    2. Usando una función constructora y su prototipo.
    3. Usando un objeto literal y 'Object.create(...)'.
    4. Usando 'new Object()' y luego asignando propiedades.
    5. Usando 'Object.assign()' para extender un objeto existente.
- Verificar que todos los objetos creados puedan usar el método 'arrancar' definido en el prototipo de Vehiculo.
- Asegúrate de que al menos uno de los objetos tenga una marca distinta y comprueba que el método funciona correctamente en cada caso.
- Reflexiona y documenta en tu solución cuáles de estas formas realmente comparten el mismo prototipo y cuáles no.
*/


class Vehiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar(){
        console.log(`El vehículo de la marca ${this.marca} está arrancando`)
    }
}

const modeloVehiculo = {
    imprimirModeloVehiculo(){
    if(this.modelo > 2018){
        return console.log(`El vehículo de la marca ${this.marca} es modelo ${this.modelo} y aún sirve`)
    }
    return console.log(`El vehículo de la marca ${this.marca} es modelo ${this.modelo} ya no sirve, bote eso`)
    
}}

Object.assign(Vehiculo.prototype, modeloVehiculo)

const maclaren = new Vehiculo("Mclaren", 2020)
maclaren.arrancar()
maclaren.imprimirModeloVehiculo()
const ferrari = Object.create(Vehiculo.prototype)
ferrari.marca = "ferrari"
ferrari.modelo = 2010
ferrari.arrancar()
ferrari.imprimirModeloVehiculo()


function CrearVehiculo(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

CrearVehiculo.prototype.modeloVehiculo = function(){
    if(this.modelo > 2018){
        return console.log(`El vehículo de la marca ${this.marca} es modelo ${this.modelo} y aún sirve`)
    }
    return console.log(`El vehículo de la marca ${this.marca} es modelo ${this.modelo} ya no sirve, bote eso`)
    
}

const renoult = new CrearVehiculo("Renoult", 2005)
console.log(`El vehículo es marca ${renoult.marca} y su modelo es ${renoult.modelo}`)
renoult.modeloVehiculo()

console.log(maclaren instanceof Vehiculo); // true
console.log(ferrari instanceof Vehiculo);  // true
console.log(renoult instanceof CrearVehiculo); // true

// 2. Crea un objeto que herede de otro

console.log("---------- Ejercicio 2 -----------")

const libroMisterio = {
    nombre: "Las Aventuras Aventurreras",
    codigo: 1234,
    leerLibro: function(){
        console.log(`Pto el que lo lea, quiero decir estas leyendo ${this.nombre}`)
    }
}

const libroMisterioPastaDura = Object.create(libroMisterio) //OJO ESTA ES LA HEREENCIA CON OBJETOS LITERALES PERROOOO
libroMisterioPastaDura.nombre = "Increíbles Aventuras Plásticas"
libroMisterioPastaDura.codigo = 123456
libroMisterioPastaDura.leerLibro()
libroMisterio.leerLibro()
// console.log(libroMisterioPastaDura instanceof libroMisterio) los dos son instancias de objetos, los objetos literales no vienen con costructores
console.log(Object.getPrototypeOf(libroMisterioPastaDura) === libroMisterio); // ESTA ES LA MANERA DE COMPROBAR HERENCIA ENTRE OBJETOS!!

// 3. Define un método de instancia en un objeto
console.log("---------- Ejercicio 3 -----------")

const creadorObjetosJugadores = {
    crearInstanciaJugador: function(nombre, edad, posicion){
        return {nombre, edad, posicion}
    }
}

const jugadorPepe = creadorObjetosJugadores.crearInstanciaJugador("Pepe", 35, "delantero")
console.log(jugadorPepe)

// 4. Haz uso de get y set en un objeto

console.log("---------- Ejercicio 4 -----------")

const computador = {
    _marca: "Lenovo",
    pulgadas: 15,
    teclado: "Mecanico",
    set marca(marca){
        this._marca = marca
    },
    get marca(){
        return this._marca
    }
}
console.log(computador.marca)
computador.marca = "WAIO"
console.log(computador.marca)

// 5. Utiliza la operación assign en un objeto
console.log("---------- Ejercicio 5 -----------")

const tienda = {
    nombre: "Kwikimart",
    ciudad: "Cali",
    empleados: 5,
    cantidadEmpleados: function(){
        console.log(`Los empleados de ${this.nombre} actualmente son ${this.empleados}`)
    }
}

const ciudadTienda = {
    ciudadTienda: function(){
        console.log(`La tienda ${this.nombre} se encuentra ubicada en ${this.ciudad}`)
    }
}

Object.assign(tienda, ciudadTienda)
tienda.cantidadEmpleados()
tienda.ciudadTienda()

// 6. Crea una clase abstracta

console.log("---------- Ejercicio 6 -----------")

class Computador{
    constructor(tipo){
        if(new.target === Computador){
            throw new Error ("No se puede instanciar esta clase")
        }
        this.tipo = tipo;
    }
    encender(){
        throw new Error ("Método no accesible, debe implementarlo la subclase")
    }
}

class Portatil extends Computador{
    constructor(tipo, marca){
        super(tipo)
        this.marca = marca
    }
    encender(){
        console.log(`El ${this.tipo} se esta encendiendo`)
    }

    desplazar(){
        console.log(`El ${this.tipo} de la marca ${this.marca} se está desplazando del punto A al B`)
    }
}

class PCEscritorio extends Computador{
    encender(){
        console.log(`El ${this.tipo} se esta encendiendo`)
    }
}

const portatilLenovo = new Portatil("Portatil", "Lenovo")
const MSIEscritorio = new PCEscritorio("PC Escritorio")
portatilLenovo.encender()
portatilLenovo.desplazar()
MSIEscritorio.encender()

// 7. Utiliza polimorfismo en dos clases diferentes

console.log("---------- Ejercicio 7 -----------")


class ConfiguracionGlobal {
    constructor(nombre){
        if(ConfiguracionGlobal.instancia){
            return ConfiguracionGlobal.instancia
        }
        this.nombre = nombre
        ConfiguracionGlobal.instancia = this
    }
    modoOscuro(){
        console.log("Activando modo oscuro")
    }
}

class Dispositivo{
    constructor(modelo){
        if(new.target === Dispositivo){
            throw new Error ("Esta clase no se debe instanciar")
        }
        if(typeof modelo !== "string"){
            throw new Error (`El valor ingresado no es valido vaya a por ayuda bruto`)
        }
        this.modelo = modelo
    }
    encender(){
        throw new Error ("Método a implementar por la subclase")
    }
}

class PortatilUltraLiviano extends Dispositivo{
    encender(){
        console.log(`El portatil ultraliviano modelo ${this.modelo} se está encendiendo madafakas`)
    }
}

class PortatilEstandar extends Dispositivo{
    encender(){
        console.log(`El portatil estándar modelo ${this.modelo} se está encendiendo madafakas`)
    }
}

class Tablet extends Dispositivo{
    encender(){
        console.log(`la tablet megachulística modelo ${this.modelo} se está encendiendo madafakas`)
    }
}

const tabletSamsung = new Tablet("Samsung")
const portatilUltraMSI = new PortatilUltraLiviano("MSI")
const portatilHP = new PortatilEstandar("Jiuler pakar")
tabletSamsung.encender()
portatilUltraMSI.encender()
portatilHP.encender()

const conexiónMixin = {
    conectarWifi: function(){
        console.log(`El dispositivo ${this.modelo} se está conectando al Wifi...`)
    },
    conectarBluetooth: function(){
        console.log(`El dispositivo ${this.modelo} se está conectando al Bluetooth...`)
    }
}

Object.assign(Dispositivo.prototype, conexiónMixin)
portatilHP.conectarWifi()
portatilUltraMSI.conectarBluetooth()
console.log(typeof tabletSamsung.modelo)
if(typeof tabletSamsung.modelo === "string"){
    console.log("La tablet es string")
}

const validarTipo = {
    get(target, propiedad){
        return target[propiedad]
    },
    set(target, propiedad, valor){
        if(typeof valor !== "string"){
            throw new Error ("Tipo de dato no soportado")
        }
        target[propiedad] = valor
    }
}
const portatilAMDProxy = new Proxy(new PortatilEstandar("PC SuperGaming"), validarTipo)
console.log(portatilAMDProxy.modelo)
portatilAMDProxy.modelo = "Guacamaya"
console.log(portatilAMDProxy.modelo)
// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy