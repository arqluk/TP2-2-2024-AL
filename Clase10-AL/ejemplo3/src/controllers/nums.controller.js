import NumsService from "../services/nums.service.js"

class NumsController {
    constructor() {
        this.service = new NumsService()
    }

    numsWelcome = async (req, res) => {
        const msg = await this.service.numsWelcome()
        res.send(msg)
    }

    postNums = async (req, res) => {
        const num = req.body
        const newNum = await this.service.postNums()
        res.send(newNum)
    }

    getAllNums = async (req, res) => {
        const nums = await this.service.getAllNums()
        res.send(nums)
    }

    getNumsProm = async (req, res) => {
        const promedioNums = await this.service.getNumsProm()
        res.send(promedioNums)
    }

    getNumsMinMax = async (req, res) => {
        const minMax = await this.service.getNumsMinMax()
        res.send(minMax)
    }

    getNumsCant = async (req, res) => {
        const cantNums = await this.service.getNumsCant()
        res.send(cantNums)
    }

}

export default NumsController