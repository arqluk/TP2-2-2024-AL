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


    // -------------------------------------------------------------------------------------------

    // Resolución modularizando con calcularNotas() que implementa reduce()

    getNotesMed = async () => {
        const { promedioNotas } = this.calcularNotas(this.notes)
        return `El promedio de notas es: ${promedioNotas.toFixed(2)}`
    }

    getNotesMin = async () => {
        const { minNota } = this.calcularNotas(this.notes)
        const { nombreMinNota } = this.calcularNotas(this.notes)
            return `La notas mínima es: ${minNota.toFixed(2)} de ${nombreMinNota}`
        }

    getNotesMax = async () => {
        const { maxNota } = this.calcularNotas(this.notes)
        const { nombreMaxNota } = this.calcularNotas(this.notes)
            return `La notas máxima es: ${maxNota.toFixed(2)} de ${nombreMaxNota}`
        }

    // Función que calcula la nota más baja, la más alta y el promedio
    calcularNotas = (notes) => {
        let minNota = Infinity
        let nombreMinNota = ""
        let maxNota = -Infinity
        let nombreMaxNota = ""
        let sumatoriaNotas = 0

        maxNota = this.notes.reduce((acumulador, actual) => {
            return actual.nota > acumulador ? actual.nota : acumulador
        }, -Infinity)

        let idx1 = this.notes.findIndex((elem) => elem.nota == maxNota)
        nombreMaxNota = this.notes[idx1].nombre

        minNota = this.notes.reduce((acumulador, actual) => {
            return actual.nota < acumulador ? actual.nota : acumulador
        }, Infinity)

        let idx2 = this.notes.findIndex((elem) => elem.nota == minNota)
            nombreMinNota = this.notes[idx2].nombre

        sumatoriaNotas = this.notes.reduce((acumulador, actual) => acumulador + actual.nota, 0)
        const promedioNotas = sumatoriaNotas / this.notes.length

        return {
            minNota,
            nombreMinNota,
            maxNota,
            nombreMaxNota,
            promedioNotas
        }
    }
}

// -------------------------------------------------------------------------------------------

    export default NotesMemModel



    // -------------------------------------------------------------------------------------------

    // Resolución modularizando con calcularNotas() con sort() -> desordena el array original


    // getNotesMin = async () => {
    //     const { minNota } = this.calcularNotas(this.notes)
    //     const { nombreMinNota } = this.calcularNotas(this.notes)
    //     return `La notas mínima es: ${minNota.toFixed(2)} de ${nombreMinNota}`
    // }

    // getNotesMax = async () => {
    //     const { maxNota } = this.calcularNotas(this.notes)
    //     const { nombreMaxNota } = this.calcularNotas(this.notes)
    //     return `La notas máxima es: ${maxNota.toFixed(2)} de ${nombreMaxNota}`
    // }

    // getNotesMed = async () => {
    //     const { promedioNotas } = this.calcularNotas(this.notes)
    //     return `El promedio de notas es: ${promedioNotas.toFixed(2)}`
    //     }

    //  // Función que calcula la nota más baja, la más alta y el promedio
    // calcularNotas = (notes) => {
    //     let minNota = Infinity
    //     let nombreMinNota = ""
    //     let maxNota = -Infinity
    //     let nombreMaxNota = ""
    //     let sumatoriaNotas = 0
    //     let promedioNotas = 0

    //     let notesAsc = notes.sort((a, b) => a.nota - b.nota)
    //     minNota = notesAsc[0].nota
    //     nombreMinNota = notesAsc[0].nombre
    //     maxNota = notesAsc[notesAsc.length - 1].nota
    //     nombreMaxNota = notesAsc[notesAsc.length - 1].nombre
    //     sumatoriaNotas = notes.reduce((acumulador, actual) => acumulador + actual.nota, 0)
    //     if (this.notes.length > 0) {
    //         promedioNotas = sumatoriaNotas / notes.length
    //     }

    //     return {
    //         minNota,
    //         nombreMinNota,
    //         maxNota,
    //         nombreMaxNota,
    //         promedioNotas,
    //     }
    // }


    // -------------------------------------------------------------------------------------------

    // Resolución con reduce() sin modularizar

    // getNotesMed = async () => {
    //     let promedioNotas = 0
    //     if (this.notes.length > 0) {
    //         let sumatoriaNotas = this.notes.reduce((acumulador, actual) => acumulador + actual.nota, 0)
    //         promedioNotas = sumatoriaNotas / this.notes.length
    //     }
    //     return `El promedio de notas es: ${promedioNotas.toFixed(2)}`
    // }

    // getNotesMin = async () => {
    //     let notaMin = Infinity
    //     let nombreMinNota = ""
    //     if (this.notes.length > 0) {
    //         notaMin = this.notes.reduce((acumulador, actual) => {
    //             return actual.nota < acumulador ? actual.nota : acumulador
    //         }, Infinity)
    //         console.log("Nota Minima: ", notaMin)
    //         let idx = this.notes.findIndex((elem) => elem.nota == notaMin)
    //         console.log("IDX: ", idx)
    //         nombreMinNota = this.notes[idx].nombre
    //         return `La notas mínima es: ${notaMin.toFixed(2)} de ${nombreMinNota}`
    //     }
    // }

    // getNotesMax = async () => {
    //     let notaMax = -Infinity
    //     let nombreMaxNota = ""
    //     if (this.notes.length > 0) {
    //         notaMax = this.notes.reduce((acumulador, actual) => {
    //             return actual.nota > acumulador ? actual.nota : acumulador
    //         }, -Infinity)
    //         console.log("Nota Maxima: ", notaMax)
    //         let idx = this.notes.findIndex((elem) => elem.nota == notaMax)
    //         console.log("IDX: ", idx)
    //         nombreMaxNota = this.notes[idx].nombre
    //         return `La notas máxima es: ${notaMax.toFixed(2)} de ${nombreMaxNota}`
    //     }
    // }

    

// -------------------------------------------------------------------------------------------

    // Resolución modularizando con calcularNotas() que implementa bucle de búsqueda de mayor y menor

    // getNotesMed = async () => {
    //     const { promedioNotas } = this.calcularNotas(this.notes)
    //     //console.log("Promedio: ", promedioNotas)
    //     //return String(promedioNotas.toFixed(2))
    //     return  `El promedio de notas es: ${promedioNotas.toFixed(2)}` 
    // }

    // getNotesMin = async () => {
    //     const { minNota } = this.calcularNotas(this.notes)
    //     const { nombreMinNota } = this.calcularNotas(this.notes)
    //     //console.log("Minimo: ", minNota)
    //     //return String(minNota.toFixed(2))
    //     return `La nota más baja es: ${minNota.toFixed(2)} de ${nombreMinNota}`
    // }

    // getNotesMax = async () => {
    //     const { maxNota } = this.calcularNotas(this.notes)
    //     const { nombreMaxNota } = this.calcularNotas(this.notes)
    //      //console.log("Maximo: ", maxNota)
    //     //return String(maxNota.toFixed(2))
    //     return `La nota más alta es: ${maxNota.toFixed(2)} de ${nombreMaxNota}`
    // }

    // Función que calcula la nota más baja, la más alta y el promedio
    // calcularNotas = (notes) => {
    //     let minNota = Infinity
    //     let nombreMinNota = ""
    //     let maxNota = -Infinity
    //     let nombreMaxNota = ""
    //     let sumNotas = 0

    //     for (let i = 0; i < notes.length; i++) {
    //         //console.log("Nota: ", notes[i].nota)
            
    //         const notaActual = notes[i].nota
    //         const nombreActual = notes[i].nombre

    //         if (notaActual < minNota) {
    //             minNota = notaActual;
    //             nombreMinNota = nombreActual
    //         }

    //         if (notaActual > maxNota) {
    //             maxNota = notaActual
    //             nombreMaxNota = nombreActual
    //         }

    //         sumNotas += notaActual
    //         //console.log("Sumatoria: ", sumNotas)
    //     }

    //     const promedioNotas = sumNotas / notes.length;
    //     //console.log("PromedioNotas: ", promedioNotas)
    //     //console.log("NotaMin: ", minNota)
    //     //console.log("NotaMax: ", maxNota)

    //     return {
    //         minNota,
    //         nombreMinNota,
    //         maxNota,
    //         nombreMaxNota,
    //         promedioNotas,
            
    //     }
    // }
