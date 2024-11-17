import ProdService from "../services/ProductsServices.js";

class ProdController {
  constructor() {
    this.service = new ProdService()
  }

  getProd = async (req, res) => {
    const prod = await this.service.getProd()
    res.send(prod)
  }

  getProdById = async (req, res) => {
    const { id } = req.params
    const prod = await this.service.getProdById(id)
    res.send(prod)
  }

  getProdByColor = async (req, res) => {
    //Esta palabra tiene que coincidir con la definición que hago en la ruta (/:color)
    const { color } = req.params
    const prod = await this.service.getProdByColor(color)
    res.send(prod)
  }

  postProd = async (req, res) => {
    const data = req.body
    const newProd = await this.service.postProd(data)
    res.send(newProd)
  }

  patchProd = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const update = await this.service.patchProd(id, data)
    res.send(update)
  }

  putProd = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const update = await this.service.putProd(id, data)
    res.send(update)
  }

  deleteProd = async (req, res) => {
    const { id } = req.params
    const deleteItem = await this.service.deleteProd(id)
    res.send(deleteItem)
  }

}

export default ProdController;