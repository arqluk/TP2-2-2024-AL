import productsModel from "../models/index.js"

// const getAllProducts = async () => {
//     //Fix: la función se ejecuta!
//     return await productsModel.getAllProducts()
// }

const getAllProducts =  () => {
    //Fix: la función se ejecuta!
    return  productsModel.getAllProducts()
}

// const getProductsById = async (identificador) => {

//     //Fix: la función se ejecuta!
//     return await productsModel.getProductsById(identificador)
// }

const getProductsById =  (identificador) => {
    //Fix: la función se ejecuta!
    return  productsModel.getProductsById(identificador)
}



export default {
    getAllProducts,
    getProductsById
}
