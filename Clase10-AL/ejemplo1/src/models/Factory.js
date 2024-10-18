import WordsMemModel from "./DAO/words.model.mem.js"

class Factory {
    static get(persistencia){
        switch (persistencia) {
            case "MEM":
                console.warn("Persistencia en memoria del servidor.")
                return new WordsMemModel();
            default:
                console.warn("Persistencia en default.")
                return new WordsMemModel();
        }
    }
}

// En este caso al no haber otro tipo de persistencia más que en memoria del servidor
// podemos definir el método sin otras posibilidades (sin usar swicth):
// class Factory{
//     static get(){
//         return new WordsMemModel();
//     }
// }

export default Factory