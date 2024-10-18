import NotesService from "../services/notes.service.js"

class NotesController {
    constructor() {
        this.service = new NotesService()
    }

    postNotes = async (req, res) => {
        const note = req.body
        const newNote = await this.service.postNotes(note)
        res.send(newNote)
    }

    getAllNotes = async (req, res) => {
        const notes = await this.service.getAllNotes()
        res.send(notes)
    }

    getNotesMed = async (req, res) => {
        const noteMed = await this.service.getNotesMed()
        res.send(noteMed)
    }

    getNotesMin = async (req, res) => {
        const noteMin = await this.service.getNotesMin()
        res.send(noteMin)
    }

    getNotesMax = async (req, res) => {
        const noteMax = await this.service.getNotesMin()
        res.send(noteMax)
    }
}

export default NotesController