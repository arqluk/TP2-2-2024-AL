class NumsMemModel {
    constructor() {
        this.nums = [
            { id: 1, numero: 7 },
            { id: 2, numero: 23 },
            { id: 3, numero: 3 },
            { id: 4, numero: 0 },
            { id: 5, numero: 59 }
        ]
    }

    numsWelcome = async () => {
        return "Bienvenidos a Nums"
    }

    getAllNums = async () => {
        return await this.nums
    }
}

export default NumsMemModel
