//Importación de módulos
//Common JS
//const fs = require("fs")
import fs from "fs"



//File System Sincronico
// console.log("--------INICIO---------")

// const file = fs.readFileSync("doc.txt", "utf-8")
// console.log("File: ", file)
// console.log("----------------------------------------------------------")

// const writeFile = fs.writeFileSync("doc.txt", "Sobreescribir mi archivo!")
// const updateFile = fs.readFileSync("doc.txt", "utf-8")
// //console.log("----------------------------------------------------------")
// console.log("newUpdate: ", updateFile)
// console.log("File después: ", file)

// console.log("--------FIN---------")
// console.log("----------------------------------------------------------")


//File System Asincronico
// console.log("--------INICIO---------")

// const fileAsync = fs.readFile("doc.txt", "utf-8", (err) => {
//     console.log(err)
// })
// console.log("FileAsync: ", fileAsync)
// console.log("----------------------------------------------------------")

// const writeFileAsync = fs.writeFile("doc.txt", "Sobreescribir mi archivo!", (err, data) => {
//     console.log(err)
//     console.log(data)
// })
// const fileUpdateAsync = fs.readFile("doc.txt", "utf-8", (err) => {
//     console.log(err)
// })


// //console.log("----------------------------------------------------------")


// console.log("FileUpdateAsync: ", fileUpdateAsync)


// console.log("--------FIN---------")

//console.log("----------------------------------------------------------")


//Comentarios para trabajo práctico "Primer Servidor Node.js"

// function tp(a, b){
//     //solucion del ejercicio
// }

// //Invocar para ver el resultado
// tp()


// //funcion flecha
// const miFuncion = (a, b) => {
//     //solucion a mi problema
// }

//invocar para ver el resultado
//miFuncion()



// console.log("Hola Mundo")

// //Array
// const miArray = [1, 2, 3, 4]
// console.log(miArray)
// console.log("----------------------------------------------------------")

// //Añadimos el 5 al array
// console.log("Añadimos el 5 al array")
// miArray.push(5)
// console.log("Mi Array después de añadir un elemento: ", miArray.length)
// console.log(miArray)
// console.log("----------------------------------------------------------")

// //Buscando la posición en el array de ese valor
// console.log("IndexOf 1: ", miArray.indexOf(1))
// console.log("IndexOf 5: ", miArray.indexOf(5))
// console.log("----------------------------------------------------------")

// //Eliminamos el primer elemento del array
// console.log("Eliminamos el primer elemento del array")
// miArray.shift()
// console.log("Mi Array modificado: ", miArray)
// //Añadimos un elemento al principio
// console.log("Añadimos el elemento 0 al principio del array")
// miArray.unshift(0)
// console.log("Mi Array modificado: ", miArray)
// console.log("----------------------------------------------------------")


//Array
const miArray = [1, 2, 3, 4]
miArray.push(5)
miArray.push(6)
const miArray2 = [6, 7, 8, 9]
console.log("Mi Array", miArray)
console.log("Mi Array2", miArray2)
console.log("----------------------------------------------------------")

//Desestructuring Arrays - Desestructuracion de objetos de tipo Array
console.log("Destructuring de arrays [...miArray, ...miArray2]")
const desestructuringArrays1 = [...miArray, ...miArray2]
console.log("desestructuringArrays1: ", desestructuringArrays1)
console.log("----------------------------------------------------------")
console.log("Destructuring de arrays [miArray, ...miArray2]")
const desestructuringArrays2 = [miArray, ...miArray2]
console.log("desestructuringArrays2: ", desestructuringArrays2)
console.log("----------------------------------------------------------")
const desestructuringArrays3 = [miArray, miArray2]
console.log("Destructuring de arrays [miArray, miArray2]")
console.log("desestructuringArrays3: ", desestructuringArrays3)
console.log("----------------------------------------------------------")



//Objetos
const miObj = {a: 1, b: 2, c: 3, d: 4}
const miObj2 = {g: 7, h: 8, i: 9, j: 6}
console.log("miObj: ", miObj)
console.log("miObj2: ", miObj2)
console.log("----------------------------------------------------------")

//Añadir claves/valor al objeto
console.log("Añadimos el par e:5 y f:6 al objeto")
miObj.e = 5
miObj["f"] = 6 
console.log("miObj modificado: ", miObj)
console.log("----------------------------------------------------------")

//Traigo solo valores del objeto
console.log("Solo valores")
console.log("Object Values: ", Object.values(miObj))
//Traigo solo las claves
console.log("Solo claves")
console.log("Object Keys: ", Object.keys(miObj))

//spread operator para expandir los elementos, propagarlos, fusionarlos, etc
//Desestructuring Object - Desestructuracion de Objetos
console.log("miObj: ", miObj)
console.log("miObj2: ", miObj2)
console.log("Añadimos el par a:0 al objeto miObj2")
miObj2.a = 0
console.log("miObj2 modificado: ", miObj2)
console.log("----------------------------------------------------------")
console.log("Destructuring de objetos [...miObj, ...miObj2]")
const desestructuringObj1 = {...miObj, ...miObj2}
console.log("desestructuringObj1: ", desestructuringObj1)
console.log("----------------------------------------------------------")
console.log("Destructuring de objetos [miObj, ...miObj2]")
const desestructuringObj2 = {miObj, ...miObj2}
console.log("desestructuringObj2: ", desestructuringObj2)
console.log("----------------------------------------------------------")
console.log("Destructuring de objetos [miObj, miObj2]")
const desestructuringObj3 = {miObj, miObj2}
console.log("desestructuringObj3: ", desestructuringObj3)
console.log("----------------------------------------------------------")


//Array de objetos con datos
const misDatos = [
    {nombre: "Maria Luisa", nota: 10, email: "marialuisa@gmail.com"},
    {nombre: "Juan Pablo", nota: 9, email: "juanpablo@gmail.com"},
    {nombre: "Santiago", nota: 8, email: "santiago@gmail.com"}
]
console.log("misDatos: ", misDatos)
console.log("----------------------------------------------------------")
const misDatosFiltrados = misDatos.filter((element) => element.nota == 10)
console.log("misDatosFiltrados: ", misDatosFiltrados)
console.log("----------------------------------------------------------")
const misDatosMapeados = misDatos.map((elem) => elem.nota == 8)
console.log("misDatosMapeados: ", misDatosMapeados)



//Procesos sincrónicos: hay que esperar para que el hilo de ejecución continúe (bloqueante)
//Procesos asincrónicos: no hay que esperar una respuesta (no bloqueante)

//File System Sincronico








