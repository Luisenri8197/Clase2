// 1. Crea una función que retorne a otra función


// Ejemplo hecho a mano
/*
function primos(lista, callback){
    const arr1 = Array.isArray(lista) ? lista : [lista];
    let numPrimos = []
    console.log("los números a validar van a ser: ")
    console.log(...arr1)
    for (let i = 0; i < arr1.length; i++){
        let numero = arr1[i]                
        let resultado = callback(numero);
        if (resultado) numPrimos.push(resultado);
    }
    console.log("pero los números primos de esa lista son: ")
    if (numPrimos === 0){
        return console.log(" ninguno")
    }
    console.log(...numPrimos)
}

function validarPrimos(numero){
     if (numero<= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return numero;
}

arrEjemplo1 = [1,2,3,4,5,6,7,13,27]
primos(arrEjemplo1, validarPrimos)*/

// Ejemplo ayudado con IA

function primos(lista, callback){
    const arr1 = Array.isArray(lista) ? lista : [lista]; //indica mejora con const arr = [].concat(lista);
    const numPrimos = arr1.filter(callback)
    return numPrimos;
}

function validarPrimos(numero){ //recomienda cambiar a esPrimo (esAlgo())
     if (numero<= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) { // Cada iteración calcula el cuadrádo, mejor una variable limite que guarde el valor calculado
        if (numero % i === 0) return false;
    }
    return true;
}

const arrEjemplo1 = [1,2,3,4,5,6,7,13,27] //Declaré la variable global por olvdarme poner el const
const resultadoPrimos = primos(arrEjemplo1, validarPrimos);
console.log(`Los números primos a validar son: ${arrEjemplo1.join(" ")}`)

console.log("Y los primos contenidos son: ")

if (resultadoPrimos.length === 0){
    console.log("ninguno")
}else {
    console.log(...resultadoPrimos) //Recomienda usar join (" ,") para mejorar output
}



// 2. Implementa una función currificada que multiplique 3 números

function multiplicacionDe3(a){
    return function (b){
        return function (c){
            return a * b * c;

        }
    }
}

let x = 2
let y = 2
let z = 3

const multiABC = multiplicacionDe3(x)(y)(z)

console.log(`El valor de multiplicar ${x}, ${y} y ${z} es: ${multiABC}`)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potenciaDeNum(a, n) {
    if(n === 0){
        return 1
    }
    return a * potenciaDeNum(a, n - 1)
}

console.log(`El valor de ${x} elevado a la ${y} es:`, potenciaDeNum(x,y))

//Solución del IA - Dividir el valor que ingresa como n

function potenciaRapida(a, n) {
    if (n === 0) return 1;
    if (n % 2 === 0) {
        let mitad = potenciaRapida(a, n / 2);
        return mitad * mitad;
    } else {
        return a * potenciaRapida(a, n - 1);
    }
}

console.log(potenciaRapida(x, y));


// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(n){
    let counter = n;
    return{
        incrementar: function(){
            counter++
            return counter;
        },
        decrementar: function(){
            counter--
            return counter;
        },
        obtenerValor: function(){
            return counter;
        }
    }
}

const contadorOpciones = createCounter(5)
console.log("Obtener valor: ",contadorOpciones.obtenerValor())
console.log("Incremento valor: ",contadorOpciones.incrementar())
console.log("Obtengo valor: ",contadorOpciones.obtenerValor())
console.log("Disminuyo valor: ", contadorOpciones.decrementar())
console.log("Obtengo nuevo valor: ", contadorOpciones.obtenerValor())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumMuchasVeces(multiplicador, ...numeros){
    let superSuma = numeros.reduce((acc, n) => acc + n, 0)
    return superSuma * multiplicador;
}

let arrPrueba = [1,2,3,4]
console.log(sumMuchasVeces(2, ...arrPrueba))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumaConCallback(callback, ...suma){
    let sumaGrande = suma.reduce((acc, n) => acc + n, 0)
    callback(sumaGrande)
}

function mostrarSumaGrande(sumaGrande){
    console.log(`Parcero la suma de los números que me pasó es: ${sumaGrande}, su mamita por si acaso`)
}

sumaConCallback(mostrarSumaGrande, ...arrPrueba)

// 7. Desarrolla una función parcial

function restaParcial(valorFijo){
    return function(restoDeValores){
        let acc = sumMuchasVeces(1,...restoDeValores)
        if ( acc > valorFijo) {
            let resultado = valorFijo - acc;
            return console.log(`Pana el resultado dá negativo pille: ${resultado}`);
        }
        resultado = valorFijo - acc;
        return console.log(`Pana el valor es positivo o cero pille: ${resultado}`);
    }
}

const restarVariableFija = restaParcial(25)
restarVariableFija(arrPrueba)

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico