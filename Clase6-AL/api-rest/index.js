console.log("Mi primer API REST")
import http from "http"
import fs from "fs"

// API
// application programming interface - interfaz de programación de aplicaciones
// permite la comunicación entre dos componentes de software
// esta api se basa en un protocolo de comunicación entre el cliente y el servidor

// API - REST
// define algunos métodos (verbos) que permiten la comunicación entre el cliente y el servidor
// GET, POST, PUT, PATCH, DELETE

// HTTP
// protocolo de transferencia de hipertexto
// es el encargado de la web tal como la conocemos
// para ello necesitamos: una petición , un método, una respuesta, un encabezado, un código de operación, una url

// REQ: objeto de requerimiento
// RES: objeto de respuesta

const server = http.createServer(async (req, res) => {

    //const url = req.url
    //const method = req.method

    // desestructuring object
    const { url: url, method: method } = req

    console.log("REQ: ", method)

    if(method === "GET") {
        try {
            const view = await fs.promises.readFile("./public/index.html")
            // Encabezado
            res.writeHead(200, {"Content-Type": "text/html; charset0utf-8"})
            res.end(view)
        } catch (error) {
            // el bloque catch trae un objeto "error" que dentro va a tener su propio status code 
        res.writeHead(404, {"Content-Type": "text/html; charset0utf-8"})
        res.end(error)
        }
    }

    
})

server.listen(8080, () => {
    console.log("Servidor running en http://localhost:8080")
    console.log("Servidor running ... ")
})

server.on("Error", (error) => {
    console.log("Ha ocurrido un error con el servidor. ", error)
})




