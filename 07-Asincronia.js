// Programación asíncrona

console.log("Inicio")

console.log("fin")

// Event Loop
//COMPONENTES DEL EVENT LOOP
//1. Call stack
//2. Web APIs o NODE.js
//3. Task Queue y MicrotaskQueue

//Flujo del Event Loop:
//1. Call Stack
//2. Operación Asíncronas --> Web APIs o Node.js
//3. Operación termina --> La coloca en el task Queue o Microtask Queue
//4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
//5. El proceso se repite

//  ------- Asincronía -----

//Callbacks

console.log("Inicio")
setTimeout(() => {
    console.log("El setTimeout se ejecutó después de 0.8 segundos")
}, 800)
console.log("fin")

// Problema: Callback Hell

function paso1(callback){
    setTimeout(() => {
     console.log("Paso 1 finalizado");
     callback();   
    }, 1000);
}

function paso2(callback){
    setTimeout(() => {
     console.log("Paso 2 finalizado");
     callback();   
    }, 1000);
}

function paso3(callback){
    setTimeout(() => {
     console.log("Paso 3 finalizado");
     callback();   
    }, 1000);
}

paso1(() => {
    paso2(() => {
        paso3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

// Promesas

const primeraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = true
        if(ok){
            resolve("Operación etzitoza")
        }else{
            reject("Operación fallística")
        }
    }, 4000)
})

primeraPromesa.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log("Ejecutando Finally de la promesa")
})

//Encadenar promesas

function paso1Promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 1 completado")
            resolve()
        }, 5000);
    })
}

function paso2Promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 2 completado")
            resolve()
        }, 500);
    })
}

function paso3Promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 3 completado")
            resolve()
        }, 500);
    })
    
}

paso1Promesa()
    .then(paso2Promesa)
    .then(paso3Promesa)
    .then(() => {
        console.log("Todos los pasos completados")
    })

// Async/Await

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {
    console.log("Inicio proceso")
    await wait(6500)
    console.log("Proceso terminado después de 6 seg")
}
process()