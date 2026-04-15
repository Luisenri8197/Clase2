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

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico