//Funciones avanzadas

//Ciudadanos de primera clase


//Asignar una función a una variable

const llamar = function (nombre){
    console.log(`Hola, ${nombre}`);
}

llamar ("Luis");

//Asignar una función para parámetro dentro de otra función - En este caso solo se le indica a la función principal que ejecute la función entregada con un nuevo nombre

function procesarSaludo(funcionSaludar, nombre){
    funcionSaludar(nombre);
}

procesarSaludo(llamar, "Camilo");

//Retornar otra función (Orden superior)

function retornarFuncion(){
    return llamar;
}

const llamar2 = retornarFuncion();
llamar2("Juan")

//Arrow functions - Retorno implícito

const multiplicacion = (a, b) => a * b;
console.log(multiplicacion(2, 2));

// - This

const controlador = {
    nombreObjeto: "Luisito",
    saludarObjeto: function(){
        console.log(`Hola ${this.nombreObjeto}, dentro del método de objeto`);
    },
    saludarObjetoArrow: () => {
        console.log(`Hola ${this.nombreObjeto}, dentro del método con arrow`);
    }
}

controlador.saludarObjeto();
controlador.saludarObjetoArrow();

//IIFE Inmediatly Invoke Function Expretion

//IIFE Clásico

(function(){
    console.log("IIFE clásico")
})();

//iffe arrow function

(() => {
    console.log("IIFE con arrow function")
})();

//Parámetros Rest (...)

function sumar(numeros){
    console.log(numeros)
    let acc = 0
    for (let numero of numeros){        
        console.log(acc += numero)
    }
    return acc;
}

let numerosArray = [1,2,3,4,5,6]
sumar(numerosArray);

//Operación Spread (...)

const numeros2 = [1,2,3,4,5,6,7,8]
console.log(...numeros2)

//Closures (Clausuras)

function crearContador(){
    let contador = 0;
    return function (){
        contador++;
        console.log(`Contador en: ${contador}`)
        for(let i = 0; i < 10; i++){
            contador++;
            console.log(`Ahora el contador está en: ${contador}`)
        }
    }
}

const contador1 = crearContador();
contador1();

//Recursividad Función que se llama a sí misma

//Capturar factorial

function funcionRecursiva(numfactorial){
    if (numfactorial <= 1){
        return 1
    }
    return numfactorial * funcionRecursiva(numfactorial - 1)
}

console.log(funcionRecursiva(4))

//funciones parciales

function sumaCompuesta (varFija){
    
    return function(resto){
        return varFija + sumar(resto)
    }
}

const sumarCon = sumaCompuesta(4)
let arraySuma = [2,3,4,5,1,2,5,34]
console.log(sumarCon(arraySuma))

//Currying transormar función de varios parámetros a una secuencia de funciones de un argumento

function sumaCurry(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}

const sumarCurriandoAB = sumaCurry(2)(3)
const SumarCurriandoA = sumaCurry(2)
console.log(sumarCurriandoAB(3))
console.log(SumarCurriandoA(3)(1))

//Callbacks

