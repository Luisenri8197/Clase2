//Estructuras Avanzadas

//Arrays métodos

//For Each aplicar una función a cada elemnto del array

let numeros = [1,2,3,4,5]

numeros.forEach(elemento => console.log(elemento))

// Map

let numerosDuplicados = numeros.map(elemento => elemento * 2)
console.log(numerosDuplicados)

//Filter

let pares = numeros.filter(elemento => elemento % 2 === 0)
console.log(pares)

//Reduce

let suma = numeros.reduce((acc, n) => acc + n, 0)
console.log(suma)

// ----- Manipulación -----

//Flat

let arrayAnidado = [1, 2,[3, 4, 5, [6, 7], 8, 9], 10, 11]
let arrayFlat = arrayAnidado.flat(2)
console.log(arrayAnidado)
console.log(arrayFlat)

//flatmap

let arrayFrases = ["Hola Mundo", "Adios Mundo"]
let arrayMap = arrayFrases.map(arrayFrases => arrayFrases.split(" ")) //Utilizar solo map me devuelve dos arrays dentro de otro (anidado)
let arrayFlatMap = arrayFrases.flatMap(arrayFrases => arrayFrases.split(" ")) //Utilizar flatmap ayuda a que se aplane el valor final
console.log(arrayMap)
console.log(arrayFlatMap)

//----- Ordenación -----

let arrayDesordenado = ["c", "x", "b", "o", "a", "r"]
let arrayOrdenado = arrayDesordenado.sort()
console.log(arrayOrdenado)

arrayDesordenado = [3, 5, 6, 8, 20, 23, 5, 67, 7, 53, 4]
arrayOrdenado = arrayDesordenado.sort((a, b)=> b - a)
console.log(arrayOrdenado)

//reverse

arrayOrdenado.reverse()
console.log(arrayOrdenado)

// ---- Array Avanzados

// Busqueda

//includes (true o false)

console.log(arrayOrdenado.includes(4))
console.log(arrayOrdenado.includes(15))

// find

let primerPar = arrayOrdenado.find(elemento => elemento % 2 === 0) //En caso false devuelve indefined
console.log(primerPar)

//findINdex

let indexDeFind = arrayOrdenado.findIndex(elemento => elemento % 2 === 0) //retorna -1 en caso false
console.log(indexDeFind)

//----- SETS AVANZADOS ----

// Sirven para operaciones de conjuntos - set sirve para eliminiar repetidos

//Eliminación de duplicados

const arrayNumeros = [1, 2, 2, 3, 4, 4, 5, 5, 5, 7, 7]
const setNumeros = new Set(arrayNumeros) // Se quitan los repetidos - Con el spread operator se puede pasar a array de una vez
console.log(setNumeros)
const arraySetNumeros = [...setNumeros] //Con el spread operator se puede pasar de set a array
console.log(arraySetNumeros)

// ---- Operaciones con conjuntos - Unión - Intersección - Diferencia ----

//unión

const setA = new Set([1, 2, 3])
const setB = new Set([4, 3, 6])
const setC = new Set([1, 3, 4, 6])

const union = new Set([setA, setB, setC]) //Aquí solo se crea una especie de set anidado - NO una unión
console.log(union)

const nuevaUnion = new Set([...setA, ...setB, ...setC]) // Con el spread operator se genera ahora is la unión de los sets
console.log(nuevaUnion)

//Intersección

const interseccionSetABC = new Set([...setA, ...setB].filter(elemento => setC.has(elemento)))
console.log(interseccionSetABC) // intento realizado a mano, el tema es que no es la intersección exclusiva de a b y c, sino la intersección entre A+B y C

function interseccionSets(...sets) { //solución entregada por Copilot - rest une en un array los sets que le ingresen
  return sets.reduce((acc, setActual) => { // reduce devuelve el acc --> en este caso es el resultado del filter (un set)
    return new Set([...acc].filter(e => setActual.has(e))); // El filter toma cada elemento del array del acc y evalua si se encuentra en el sig set
  });
}

console.log(interseccionSets(setA, setB, setC));