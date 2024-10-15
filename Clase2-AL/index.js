// alert('Hoy es 24/08/2024')
console.log('Hola, soy AL')

//------------------------------//
//----------ECMAScript----------//
//------------------------------//
//anterior
//var DEPRECADO!!!
var x = 10 //number
x = 18
x = '20/08/2024' //string
x = [] //array
x = {} //object
x = null
x = 100

// console.log('x es igual a ' + x)


//ES6(2015)
//let puede cambiar su valor
let y = 10
y = 30
//error: let no admite redeclaraciones
// let y = 35
//si le podemos cambiar el valor
y = 35
//const es de valor inmutable
//const no se le puede reasignar el valor
const a = 25
// a = 90
const b = 35


// ----------------------------------------------------------------------------------------


//------------------------------//
//----Programación funcional----//
//------------------------------//
//arrow function (función flecha)
function sumar () {
    const suma = a + b
    console.log('SUMA: ', suma)
}

// Invocación de la función
sumar()

const z = () => {
    const sumaZ = a + b
    console.log('SUMA: ', sumaZ)
}

// Invocación de la función
z()

const z1 = (num1, num2) => {
    const sumaZ1 = num1 + num2
    console.log('SUMA Z1: ', sumaZ1)
    // o bien ...
    console.log('SUMA Z1: ', num1 + num2)
}

// Invocación de la función
z1(45, 55)

// Sumar number + string
z1(45,"55")


// ----------------------------------------------------------------------------------------


// Redeclaración de la variable x, por lo que toma el último valor que es 101
var x = 101

console.log('B es igual a: ', b)
console.log('Y es igual a: ', y)
console.log('X es igual a: ', x)

// Tipos de datos (dentro de comillas el tipo de dato que queremos comparar)
console.log( typeof(a) )
console.log( typeof(b) )
// Acá esta comparando un bloque completo de código, por lo cual da "boolean" como tipo de dato
console.log( typeof(a === "number") )

// IGUALDAD ESTRICTA "===" -> estamos comparando tipo de dato y valor
// IGUALDAD "==" -> estamos comparando solo el valor

//------------------------------//
//---------Condicionales--------//
//------------------------------//
if(typeof(a) === "number" && typeof(b) === "number"){
    console.log("Se cumple la condición!")
} else{
    console.log("No se cumple la condición")
}

// Una vez que la condición se cumple sale del condicional
if(typeof(a) === "numbr"){
    console.log("A")
} else if( typeof(b) === "numbe"){
    console.log("B")
}else if( typeof(y) === "nmber"){
    console.log("Y")
} else {
    console.log("No se cumple ninguna condición")
}

// ----------------------------------------------------------------------------------------


// scope -> rango de aplicación/alcance de un valor
// ej: var x toma el valor que esté dentro de la función
// por más que también esté declarada fuera del bloque
function restar () {
    var x = 60
    let y = 40
    const b = 50
 //   y = 50
 //   b = 60
    const resta = x - y
    const resta1 = x - b
    console.log('X: ', x)
    console.log('Y: ', y)
    console.log('B: ', b)
    console.log('RESTA: ', resta)
    console.log('RESTA1: ', resta1)
}

restar()

console.log('B fuera del scope de restar(): ', b)


// ----------------------------------------------------------------------------------------



const estudiante = {
    nombre: "Maria Gimenez",
    edad: 28,
    nota: 10
}
console.log('estudiante: ', estudiante)

// ----------------------------------------------------------------------------------------

// ------------------------------ //
// ----Programación funcional---- //
// ------------------------------ //

// arrow function (función flecha)
function sumar () {
    const suma = a + b
    console.log('SUMA: ', suma)
}

// Invocarción de la función
sumar()

const w = () => {
    const sumaW = a + b
    console.log('SUMA: ', sumaW)
}

w()

// Parámetros a una función flecha
const nombre = "Juan Pablo!"
// template string -> comillas invertidas para poder pasar variables directamente
const xyz = (a) => console.log(`Tu nombre es: ${a}`)
// Invocación de una función flecha
xyz(nombre)

