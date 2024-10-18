class NotesMemModel {
    constructor() {
        this.notes = [
            { id: 1, nombre: "Juana Gimenez", nota: 10, curso: "21A" },
            { id: 2, nombre: "Pedro Lopez", nota: 8, curso: "21A" },
            { id: 3, nombre: "Jose Perez", nota: 9, curso: "21A" }
        ]
    }

    postNotes = async (note) => {
        note.id = this.notes[this.notes.length - 1].id + 1
        this.notes.push(note)
        return note
    }

    getAllNotes = async () => {
        return await this.notes
    }

    getNotesMed = async () => {
        const noteMed = await this.model.getNotesMed()
        return noteMed
    }

    getNotesMin = async () => {
        const noteMin = await this.model.getNotesMin()
        return noteMin
    }

    getNotesMax = async () => {
        const noteMax = await this.model.getNotesMin()
        return noteMax
    }


}

export default NotesMemModel