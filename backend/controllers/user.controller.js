const DBmongo = require("../services/users.service")
const users = new DBmongo("NFTMarketPlace", "users");
const { generatePasswordService } = require("../services/hash.service")

const getUserById = async (req, res) => {

    const userId = "64e6fb5ffc3a37f2870ee4ba"
    const user = await users.getById(userId)
    res.status(200).send(user);

}

const getAllUsers = async (req, res) => {
    const allUsers = await users.get()
    res.status(200).send(allUsers)
}

const updateUser = async (req, res) => {
    const userId = "64e6fb5ffc3a37f2870ee4ba"
    const data = {
        firstName: "Gidonchanged",
        lastName: "Tuchchanged",
        username: "gidskids",
        email: "sully@gmail.com",
        password: "new",

    }
    const user = await users.findUserByEmailService(data.email)
    if (user) {
        return res.status(400).send("Email already exist");
    }
    await users.updateUserService(userId, data)

    res.send("success")
}

const addNewUser = async (req, res) => {
    console.log("addNewUser")
    // const { email, password } = req.body;

    // change to be req.body

    const data = {
        firstName: "Gidon",
        lastName: "Tuch",
        username: "gidskids",
        email: "changedsuccesully@gmail.com",
        password: "new",

    }

    const user = await users.findUserByEmailService(data.email);

    console.log(user);
    if (user) {
        console.log("already exists");
        return res.status(400).send("Email already exist")
    }


    try {
        console.log("Arrived here");
        generatePasswordService(data.password, async (hash) => {
            const resp = await users.addNewUserService(data, hash);

            res.status(201).send(resp);
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong")
    }
}

const deleteUser = async (req, res) => {
    const userId = "64e6fb5ffc3a37f2870ee4ba"
    await users.deleteUserService(userId)
    res.send("User deleted succesfully")
}

module.exports = {
    addNewUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
}