//console.log("Esto es api-rest-express")

// Framework: entorno de trabajo, contiene herramientas, middlewares, métodos, etc
// Librería: solución a un problemo concreto

// Express es un framework para node.js, nos provee herramientas, enrutamiento, middlewares

import express from "express"

console.log("Bienvenidos a api-rest-express")

const app = express()
const PORT = 8080

// Middlewares de Express (funciones que están como en medio de la solicitud y la respuesta)
//  Utilizarel req.params
app.use(express.urlencoded({extended: true}))
// Utilizarel req.body
app.use(express.json())

// Opcional añadir el middleware o no, al proyecto en el que estemos trabajando
app.use(express.static("public"))

const products =[
    {nombre: "Celular Xiaomi", categoria: "Smartphones", precio: "989000"},
    {nombre: "Mouse", categoria: "Inalambrico", precio: "150000"},
    {nombre: "Teclado", categoria: "Inalambrico", precio: "80000"}
    ]


// Endpoints ->

app.get("/", (req, res) => {
    res.send("OK")                                  
})                                                                                                                                                      


// app.get("/products", (req, res) => {
//     console.log("REQ: ", req)
//     res.send("Lista de productos")
// })                                                                                                 

app.get("/products", (req, res) => {
    console.log("REQ: ", req)
    res.send(products)
})

app.listen(PORT, () => {
    console.log("Servidor running en http://localhost:8080")
    console.log("Servidor running ... ")
})

app.on("Error", (error) => {
    console.log("Ha ocurrido un error con el servidor. ", error)
})