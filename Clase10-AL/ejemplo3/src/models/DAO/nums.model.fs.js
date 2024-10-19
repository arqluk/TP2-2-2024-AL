import fs from "fs"

class NumsFsModel {
    constructor() {
        this.nums = "nums.json"
    }

    getAllnums = async () => {
        return await fs.promises.readFile(this.nums, "utf-8")
    }
}

export default NumsFsModel