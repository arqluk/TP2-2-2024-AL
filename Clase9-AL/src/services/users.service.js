import Factory from "../models/Factory.js"

// import UserMemModel from "../models/DAO/users.model.mem.js"
// import UserFsModel from "../models/DAO/users.model.fs.js"

// DATA ACCESS OBJECT
class UsersService {
    constructor() {
        // Intanciar una instancia de la clase UserMemModel
        //this.model = UserMemModel
        //this.model = new UserMemModel()
        //this.model = new UserFsModel()
        //this.model = Factory.get("FS")
        this.model = Factory.get("")
    }

    getAllUsers = async () => {
        return await this.model.getAllUsers()
    }
}

export default UsersService


