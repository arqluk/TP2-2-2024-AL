import NumsController from "../controllers/nums.controller.js"
import express from "express"

class NumsRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new NumsController()
    }

    start() {
        this.router.get("/", this.controller.numsWelcome)
        this.router.post("/nums", this.controller.postNums)
        this.router.get("/entrada", this.controller.getAllNums)
        this.router.get("/promedio", this.controller.getNumsProm)
        this.router.get("/minmax", this.controller.getNumsMinMax)
        this.router.get("/cantidad", this.controller.getNumsCant)
        return this.router
    }
}

export default NumsRoutes