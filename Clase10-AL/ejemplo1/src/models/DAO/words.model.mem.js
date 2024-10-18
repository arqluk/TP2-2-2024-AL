class WordsMemModel {
    constructor() {
        this.words = [
            { id: 1, palabra: "Hola" },
            { id: 2, palabra: "que" },
            { id: 3, palabra: "tal" }
        ]
    }

    // getAllWords = async () => {
    //     // Alternativa 1 -> map y join
    //     const words = this.words.map((e) => { return e.palabra })
    //     const result = words.join(" ")
    //     return result
    // }

    // getAllWords = async () => {
    //     // Alternativa 2 -> foreach
    //     let str = ""
    //     this.words.forEach((word) => str += word.palabra + " ")
    //     return str
    // }

    getAllWords = async () => {
        // Alternativa 3 -> reduce
        const str = ""
        let res = this.words.reduce((acumulador, proxElemento) => acumulador + proxElemento.palabra + " ", str)
        //let res = this.words.reduce((acumulador, proxElemento) => acumulador + `${proxElemento.palabra} `, str)
        return res
    }

    postWords = async (word) => {
        word.id = this.words[this.words.length - 1].id + 1
        this.words.push(word)
        return word
    }

    // Modificación parcial
    patchWords = async (identificador, word) => {
        try {
            const index = this.words.findIndex((e) => e.id == identificador)
            if (index == -1) throw new Error("El índice no existe.")
            console.log("Indice del elemento del array this.words a cambiar: ", index)
            console.log("El elemento del array this.words a cambiar: ", this.words[index])
            const newWord = { ...this.words[index], ...word }
            this.words.splice(index, 1, newWord)
            return newWord
        } catch (error) {
            console.error("Ha ocurrido un error en la operación.")
        }
    }

}

export default WordsMemModel


// -------------------------------------------------------------------------------------------------------------


    // patchWords = async (identificador, word) => {
//         const index = this.words.findIndex((e) => e.id == identificador)
//         //console.log("INDEX: ", index)
//         if(index == -1) {
//             throw new Error("El índice no existe.")
//         } else {
//             console.log("INDEX: ", index)
//         }
//         return "OK"
// }