/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

//Tienes un array de objetos que representan productos en una tienda online:
//Cada producto tiene: nombre, precio y stock.
//Necesitas:
//Usar .map para transformar los nombres de los productos a mayúsculas.
//Usar .filter para quedarte solo con los productos cuyo stock sea mayor que 0.
//Usar .reduce para calcular el precio total de todos los productos disponibles.

const productos = [
  { nombre: "Laptop", precio: 3000, stock: 1 },
  { nombre: "Mouse", precio: 100, stock: 2 },
  { nombre: "Teclado", precio: 200, stock: 5 },
  { nombre: "Monitor", precio: 800, stock: 0 }
];

console.log(productos)

const productosMayus = productos.map(e => {
    return {
        ...e,
        nombre: e.nombre.toUpperCase(),                
    }
})
console.log(productosMayus)

const productosConStock = productos.filter(e => e.stock > 0)
console.log(productosConStock)

const totalPrecioProductos = productos.reduce((acc, actual) => {
    return acc + actual.precio;
}, 0)
console.log(totalPrecioProductos)

const productosFiltrados = productos.map(e => {return {...e, nombre: e.nombre.toUpperCase()}}).filter(e => e.stock > 0)
console.log(productosFiltrados)

const valorInventario = productos.reduce((acc, actual) => acc + actual.precio * actual.stock,0)
console.log(valorInventario)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

// Generar números aleatorios entre 1 y 200
const numerosAleatorios = Array.from({ length: 10 }, () => 
  Math.floor(Math.random() * 200) + 1
);

console.log(numerosAleatorios.sort((a, b) => a - b));

const nuevosNumerosAleatorios  = numerosAleatorios.map(e => Math.pow(e,3)).filter(e => e % 2 === 0)
console.log(nuevosNumerosAleatorios)


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
// Usa .flat para obtener un único array con todos los estudiantes (sin arrays anidados).
// Usa .flatMap para transformar cada nombre en mayúsculas y aplanar el resultado en un solo array.

const cursos = [
  ["Ana", "Luis"],
  ["Marta", "Pedro", "Sofía"],
  ["Carlos"],
  ["Lucía", "Andrés"]
];

const arrayEstudiantes = cursos.flat(1)
console.log(arrayEstudiantes)
const arrayEstudiantesModificado = cursos.flatMap(e => e.map(elemento => elemento.toUpperCase()))
console.log(arrayEstudiantesModificado)

// 4. Ordena un array de números de mayor a menor

console.log(numerosAleatorios.sort((a, b) => b - a))

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const setAleatorio1 = new Set(Array.from({ length: 10 }, () => 
  Math.floor(Math.random() * 20) + 1
).sort((a, b) => a - b));

const setAleatorio2 = new Set(Array.from({ length: 10 }, () => 
  Math.floor(Math.random() * 20) + 1
).sort((a, b) => a - b));

console.log(setAleatorio1)
console.log(setAleatorio2)

const unionSets = new Set([...setAleatorio1, ...setAleatorio2])
console.log(unionSets)

const interseccionSets = new Set([...setAleatorio1].filter(e => setAleatorio2.has(e)))
console.log(interseccionSets)

const diferenciaSets = new Set([...setAleatorio1].filter(e => !setAleatorio2.has(e)))
console.log(diferenciaSets)

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario