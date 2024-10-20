const products = [
    {id: 1, nombre: "Celular Xiaomi", categoria: "Smartphones", precio: "989000"},
    {id: 2, nombre: "Mouse", categoria: "Inalambrico", precio: "150000"},
    {id: 3, nombre: "Teclado", categoria: "Inalambrico", precio: "80000"}
]

// const getAllProducts = async () => {
//     return await products
// }

const getAllProducts =  () => {
    return products
}

// const getProductsById = async (identificador) => {
//     const filteredProduct = await products.find( (product) => product.id == identificador )
//     return await filteredProduct
// }

// Usando el métod find() obtenemos un objeto (producto)
// const getProductsById =  (identificador) => {
//     const filteredProduct = products.find( (product) => product.id == identificador )
//     return filteredProduct
// }

// const getProductsById =  async (identificador) => {
//     const filteredProduct = await products.filter( (product) => product.id == identificador )
//     return await filteredProduct
// }

// Usando el métod filter() obtenemos un objeto -> array de objetos (producto)
const getProductsById =  (identificador) => {
    const filteredProduct =  products.filter( (product) => product.id == identificador )
    return filteredProduct
}

export default {
    getAllProducts,
    getProductsById
}
