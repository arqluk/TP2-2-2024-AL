class NotesMemModel {
    constructor() {
        this.notes = [
            { id: 1, nombre: "Juana Gimenez", nota: 10, curso: "21A" },
            { id: 2, nombre: "Pedro Lopez", nota: 8, curso: "21A" },
            { id: 3, nombre: "Jose Perez", nota: 9, curso: "21A" }
        ]
    }

    getNotes = async () => {
        return "Bienvenidos a Notes"
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
        const { promedioNotas } = this.calcularNotas(this.notes)
        //console.log("Promedio: ", promedioNotas)
        //return String(promedioNotas.toFixed(2))
        return  `El promedio de notas es: ${promedioNotas.toFixed(2)}` 
    }

    getNotesMin = async () => {
        const { minNota } = this.calcularNotas(this.notes)
        const { nombreMinNota } = this.calcularNotas(this.notes)
        //console.log("Minimo: ", minNota)
        //return String(minNota.toFixed(2))
        return `La nota más baja es: ${minNota.toFixed(2)} de ${nombreMinNota}`
    }

    getNotesMax = async () => {
        const { maxNota } = this.calcularNotas(this.notes)
        const { nombreMaxNota } = this.calcularNotas(this.notes)
         //console.log("Maximo: ", maxNota)
        //return String(maxNota.toFixed(2))
        return `La nota más alta es: ${maxNota.toFixed(2)} de ${nombreMaxNota}`
    }

    // Función que calcula la nota más baja, la más alta y el promedio
    calcularNotas = (notes) => {
        let minNota = Infinity
        let nombreMinNota = ""
        let maxNota = -Infinity
        let nombreMaxNota = ""
        let sumNotas = 0

        for (let i = 0; i < notes.length; i++) {
            //console.log("Nota: ", notes[i].nota)
            
            const notaActual = notes[i].nota
            const nombreActual = notes[i].nombre

            if (notaActual < minNota) {
                minNota = notaActual;
                nombreMinNota = nombreActual
            }

            if (notaActual > maxNota) {
                maxNota = notaActual
                nombreMaxNota = nombreActual
            }

            sumNotas += notaActual
            //console.log("Sumatoria: ", sumNotas)
        }

        const promedioNotas = sumNotas / notes.length;
        //console.log("PromedioNotas: ", promedioNotas)
        //console.log("NotaMin: ", minNota)
        //console.log("NotaMax: ", maxNota)

        return {
            minNota,
            nombreMinNota,
            maxNota,
            nombreMaxNota,
            promedioNotas,
            
        }
    }
}

export default NotesMemModel