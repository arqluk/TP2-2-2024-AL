import express from "express";
import UsersController from "../controllers/users.controller.js";

class Router {
    constructor() {
        // Intanciar una instancia de express.Router
        this.router = express.Router()
       
        // Intanciar una instancia de la clase UsersController
        // this.controller = UsersController
        this.controller = new UsersController()
    }

    start() {
        //this.router.get("/", this.controller.getAllUsers)
        this.router.get("/users", this.controller.getAllUsers)
        //this.router.get("/users", this.controller.getAllUsers)
        // Resto de declaración de rutas
        // this.router.post(....)
        // this.router.getById(...)

        // Esta forma de retornar aplica en esta capa específicamente!
            return this.router
    }


}

export default Router

