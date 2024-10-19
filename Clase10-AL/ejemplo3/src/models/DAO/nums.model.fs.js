import fs from "fs"

class NumsFsModel {
    constructor() {
        this.nums = "nums.json"
    }

    numsWelcome = async () => {
        return "Bienvenidos a Nums"
    }

    getAllNums = async () => {
        return await fs.promises.readFile(this.nums, "utf-8")
    }

    postNums = async (num) => {
        // Leer el archivo nums.json
        let numsJs = await fs.promises.readFile(this.nums, "utf-8");

        // Convertir el string en un array de objetos
        numsJs = JSON.parse(numsJs);

        // Asignar un nuevo id al número
        num.id = numsJs[numsJs.length - 1].id + 1;

        // Agregar el nuevo número al array
        numsJs.push(num);

        // Escribir el array actualizado de vuelta al archivo nums.json
        await fs.promises.writeFile(this.nums, JSON.stringify(numsJs, null, 2))

        return num;
    }

    getNumsProm = async () => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        const { promedioNums } = this.calcularNums(numsJs)
        return `El promedio es: ${promedioNums.toFixed(2)}`
    }

    getNumsMinMax = async () => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        const { minNum, maxNum } = this.calcularNums(numsJs)
        return { minNum, maxNum }
    }

    getNumsCant = async () => {
        let numsJs = await fs.promises.readFile(this.nums, "utf-8")
        numsJs = JSON.parse(numsJs)
        return `El cantidad de números ingresados es: ${numsJs.length}`
    }

    // Función que calcula la nota más baja, la más alta y el promedio
    calcularNums = (nums) => {
        let minNum = Infinity
        let maxNum = -Infinity
        let sumatoriaNums = 0

        maxNum = nums.reduce((acumulador, actual) => {
            return actual.numero > acumulador ? actual.numero : acumulador
        }, -Infinity)

        minNum = nums.reduce((acumulador, actual) => {
            return actual.numero < acumulador ? actual.numero : acumulador
        }, Infinity)

        sumatoriaNums = nums.reduce((acumulador, actual) => acumulador + actual.numero, 0)
        const promedioNums = sumatoriaNums / this.nums.length

        return {
            minNum,
            maxNum,
            promedioNums
        }
    }

}

export default NumsFsModel