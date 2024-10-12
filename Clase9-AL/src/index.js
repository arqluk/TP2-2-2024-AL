import express from "express"
import Router from "./routes/users.route.js"

const PORT = 8080
const app = express()

//Middlewares que necesito para intercambiar datos ya sea url o body con mi api
app.use( express.urlencoded( {extended: true} ) )
app.use( express.json() )

// Declaramos provisoriamente un endpoint para probar el funcionamiento del servidor
// app.use("/", (req, res) => {
//     res.send("Servidor funcionado OK")
// })

app.use("/", new Router().start())
// app.use("/courses", new RouterCourse().start())
// app.use("/api", new RouterGeneral().start())

app.listen( PORT, () => { console.log("Server running") } )
app.on( "Error", (err) => { console.log("Ha ocurrido un error en el servidor: ", err) } )





// --------------------------------------------------------------------------------------

// app.get("/", (req, res) => {
//     res.send("Servidor funcionado OK")
// })