class UserMemModel {
    constructor() {
        //Inicializar instancias de clase
        this.users = [
            { id: 1, nombre: "Ale" },
            { id: 2, nombre: "Ben" },
            { id: 3, nombre: "Cam" },
            { id: 4, nombre: "Dan" },
            { id: 5, nombre: "Eva" }
        ]
    }


    //Métodos de la clase
    // Sintaxis de arrow function
    getAllUsers = async () => {
        return await this.users
    }

    // Sintaxis de function 
    // getAllUsers = function() {
    //     async () => {
    //         return await this.users
    // }
}

export default UserMemModel









// const animals = [
//     { id: 1, nombre: "Ballena", caracteristica: "Azul" },
//     { id: 2, nombre: "Mapache", caracteristica: "Rabioso" },
//     { id: 3, nombre: "Perro", caracteristica: "Amigo" },
//     { id: 4, nombre: "Gato", caracteristica: "Independiente" },
//     { id: 5, nombre: "León", caracteristica: "El rey de la selva" }
// ]




// getAllUsers = function name(params) {
//     async () => {
//     return await this.users
//     }
// }