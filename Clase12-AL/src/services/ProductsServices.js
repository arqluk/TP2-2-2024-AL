import Factory from "../models/DAO/Factory.js"
import config from "../config.js"
import { validateProd } from "../services/validate/schema.js"

class ProdService {

    constructor() {
        this.model = Factory.get(config.PERSISTENCE)
    }

    getProd = async () => {
        const prod = await this.model.getProd()
        return prod
    }

    postProd = async (data) => {
        if (!validateProd(data)) {
            const newProd = await this.model.postProd(data)
            return newProd
        } else {
            throw new Error("Los campos del objeto son incorrectos.")
        }
    }

    patchProd = async (id, data) => {
        const update = await this.model.patchProd(id, data)
        return update
    }

    putProd = async (id, data) => {
        const update = await this.model.putProd(id, data)
        return update
    }

    deleteProd = async (id) => {
        const deleteItem = await this.model.deleteProd(id)
        return deleteItem
    }
}

export default ProdService