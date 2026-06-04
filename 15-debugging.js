// depuración

//console.log()

function sum(a, b){
    console.log("a: ", a)
    console.log("typeOf a:", typeof a)
    console.log("b: ", b)
    console.log("typeOf b:", typeof b)
    return a + b
}

console.log(sum(2, "3"))

// El depurador (profesional)

function divide(a, b){
    if(b === 0){
        throw new Error("no se puede dividir por cero")
    }
    return a / b
}

console.log(divide(2, 1))