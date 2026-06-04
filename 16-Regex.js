// Expresiones regulares

//sintaxis y test

console.log("Hola mundo")

const regexTry1 = /abc/
const regexTry2 = /abcd/
const regexTry3 = /ab/
const regexTry4 = RegExp("abc")
const textExample = "hola abc Javascript"
const numeros = [1,2,34]

console.log(regexTry1.test(textExample))
console.log(regexTry2.test(textExample))
console.log(regexTry3.test(textExample))
console.log(regexTry4.test(textExample))

const regexTry5 = /\d/
console.log("Este es el rextry5 numérico", regexTry5.test(numeros))

// Método replace

const regexTry6 = /Javascript/
const regexTry7 = /[2-8]/
const regexTry8 = /\d/g
console.log(textExample.replace(regexTry6, "Js"))
console.log("Estoy contando 1 2 3 4 5".replace(regexTry7, "[numero]"))
console.log("Estoy contando 1 2 3 4 5".replace(regexTry8, "[numero]"))

// regex101 para validar regex

// exec: detallex de la coincidencia

const textExample2 = "Estoy contando 1 2 3 4 5"
console.log(regexTry8.exec(textExample2))
for (const match of textExample2.matchAll(/\d/g)) {
  console.log(match[0]);
}