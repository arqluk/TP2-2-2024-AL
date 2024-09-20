//console.log("est es API REST MODULO HTTP")
import http from "http"
import fs from "fs"

// para realizar una petición http necesitamos:
// una petición , un método, una respuesta, un encabezado, un código de operación (exdito o error), una url

// REQ o REQUEST: objeto de requerimiento
// RES o RESPONSE: objeto de respuesta

const server = http.createServer(async (req, res) => {

//    const url = req.url
//    const method = req.method

// desestructuring object
const { url: url, method: method } = req

console.log()
console.log("REQ: ", url, method)

 if(method === "GET") {
        try {
            const view = await fs.promises.readFile("./public/index.html")
            // Encabezado
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
            res.end(view)
        } catch (error) {
            // el bloque catch trae un objeto "error" que dentro va a tener su propio status code 
        res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"})
        res.end(error)
        }
    }

})

server.listen(8080, () => {
    console.log("Servidor running on http://localhost:8080")
    console.log("Servidor running ... ")
})

server.on("Error", (error) => {
    console.log("Ha ocurrido un error con el servidor. ", error)
})

    
    
   








    // if(method === "GET") {
    //     try {
    //         const view = await fs.promises.readFile("./public/index.html")
    //         // Encabezado
    //         res.writeHead(200, {"Content-Type": "text/html; charset0utf-8"})
    //         res.end(view)
    //     } catch (error) {
    //         // el bloque catch trae un objeto "error" que dentro va a tener su propio status code 
    //     res.writeHead(404, {"Content-Type": "text/html; charset0utf-8"})
    //     res.end(error)
    //     }
    // }

    
//})


// Para levantar el servidor

// server.listen(8080, () => {
//     console.log("Servidor running en http://localhost:8080")
//     console.log("Servidor running ... ")
// })

// server.on("Error", (error) => {
//     console.log("Ha ocurrido un error con el servidor. ", error)
// })




//import fs from "fs"





// API
// application programming interface - interfaz de programación de aplicaciones
// permite la comunicación entre dos componentes de software
// esta api se basa en un protocolo de solicitudes y respuestas

// API - REST
// define métodos (verbos) que permiten la comunicación entre el cliente y el servidor
// EJEMPLO: GET, POST, PUT, PATCH, DELETE

// HTTP
// protocolo de transferencia de hipertexto
// es el encargado de la web tal como la conocemos, permite mostrar webs mediante url !
// para realizar una petición http necesitamos:
// una petición , un método, una respuesta, un encabezado, un código de operación, una url

// REQ o REQUEST: objeto de requerimiento
// RES o RESPONSE: objeto de respuesta


//console.log("REQ: ", method)

    // desestructuring object
    // const { url: url, method: method } = req