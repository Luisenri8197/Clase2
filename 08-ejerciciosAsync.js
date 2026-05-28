/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludo(nombre){
    console.log(`Tonces ${nombre} carechimba`)
}

function saludar(nombre, callback){
    setTimeout(() => callback(nombre),200)
    setTimeout(function(){callback(nombre)},100) //Recordar que la func flecha es lo mismo pero sin this propio
}
saludar("luis", saludo)

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback){
    setTimeout(() => {
        console.log("Ejecutando task 1")
        callback()
    }, 500);
}

function task2(callback){
    setTimeout(() => {
        console.log("Ejecutando task 2")
        callback()
    }, 500);   
}

function task3(callback){
    setTimeout(() => {
        console.log("Ejecutando task 3")
        callback()
    }, 500);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todas las task terminadas")
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".



function validarPar(num){
   
    return new Promise((resolve, reject) =>{
         if(typeof num !== "number"){
        // throw new Error ("El valor ingresado no es valido") LA IA ME INDICA QUE ES MÁS UTIL Y COHERENTE USAR REJECT
        return reject("El valor ingresado no es válido")
    }
        setTimeout(() => {
            if(num % 2 === 0){
                resolve(`El número ${num} es par`)
            }else{
                reject(`El número ${num} es impar`)
            }
        }, 1800);
    })
}

validarPar(6).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Primera tarea completada")
        }, 2000);
    })
}

function secondTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Segunda tarea completada")
        }, 800);
    })
}

function thirdTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tercera tarea completada")
        }, 800);
    })
}

firstTask().then(result => {
    console.log(result)
    return secondTask()
}).then(result2 => {
    console.log(result2)
    return thirdTask()
}).then(result3 => {
    console.log(result3)
    return new Promise(resolve => {
    setTimeout(() => {
        console.log("Tareas Completadas Alavrga")
        resolve()
    }, 500);
    })
})
// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function executeTasks(){
    try{
        await wait(3000)
        const result1 = await firstTask()
        console.log(result1)
        const result2 = await secondTask()
        console.log(result2)
        const result3 = await thirdTask()
        console.log(result3)
    } catch(error){
        console.error(error)
    }

}
executeTasks()

//----- Sugerencia de IA, hacer array de task para luego recorrerlas con for of y await

async function executeTasksArray() {
    try{
        await wait(7000)
        const tasks = [firstTask, secondTask, thirdTask]
        for (const task of tasks) {
            const result = await task()
            console.log(result)
        }
        console.log("tareas con array terimnadas")
    }catch(error){
        console.error(error)
    }
}

executeTasksArray()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(typeof id !== "number" || id >= 5){
            reject("Valor invalido o usuario no encontrado, intenta de nuevo")
        }
        
        resolve({ id, nombre: "Usuario " + id })
    }, 2000)
    })
}

async function user(id){
    await wait (10000)
    try{
        const result = await getUser(id)
        console.log(result)
    }catch (error){
        console.log(error)
    }
}

user(4)

//7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
    console.log("Inicio") // Aqui tenemos linea síncrona, como está primero que el primer console esta lista primero
    setTimeout(() => console.log("setTimeout ejecutado"), 0) // y esta va de última ya uqe el timeout queda en macrotask, estas son las últimas en entrar en la call stack
    Promise.resolve().then(() => console.log("Promesa resuelta")) // las promesas quedan en cola de microtask, estas tienen más prioridad que las macro, por lo tanto va 3ra
    console.log("Fin") // Esta va de segunda, por lo que es sincrona, pero queda despues del primer console


// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function firstTaskAltern(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Primera tarea alterna completada")
        }, 12000);
    })
}

function secondTaskAltern(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Segunda tarea alterna completada")
        }, 800);
    })
}

function thirdTaskAltern(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tercera tarea alterna completada")
        }, 800);
    })
}

async function executionAlternative() {
    const tasksArray = [firstTaskAltern(), secondTaskAltern(), thirdTaskAltern()]
    Promise.all(tasksArray).then(values => {console.log(values)}) //La IA recomuenda usar await y encapsular resultado para luego usar try catch
}

executionAlternative()

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.



// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

function checkBalance(balance){
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log((`El saldo disponible es ${balance}`))
            resolve (balance)
        }, 1000);
    })
}

function withdrawMoney(amount){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cashOut = 300
            console.log(`retirando ${cashOut}$...`)
            wait (800)
            if(amount - cashOut < 0){
                reject("Error: Fondos Insuficientes pobreton")
            }
            let newAmount = amount - cashOut
            // console.log(`Operación exitosa, saldo restante ${newAmount}`)
            resolve(newAmount)
        }, 2000);
    })
}

async function cajero() {
    try{
        await wait (12000)
        const balance = await checkBalance(500)
        console.log(`El saldo disponible es ${balance}$`)
        let nuevoSaldo = await withdrawMoney(balance)
        console.log(`Operación extosa, saldo restante es: ${nuevoSaldo}$`)
        nuevoSaldo = await withdrawMoney(nuevoSaldo)
        console.log(`Operación extosa, saldo restante es: ${nuevoSaldo}$`)
    }catch(error){
        console.log(error)
    }
}
cajero()