import NotesController from "../controllers/notes.controller.js"
import express from "express"

class NotesRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new NotesController()
    }

    start() {
        this.router.post("/notes", this.controller.postNotes)
        this.router.get("/notes", this.controller.getAllNotes)
        this.router.get("/notes/avg", this.controller.getNotesMed)
        this.router.get("/notes/min", this.controller.getNotesMin)
        this.router.get("/notes/max", this.controller.getNotesMax)
        return this.router
    }
}

export default NotesRoutes
