const DBmongo = require("../services/users.service")
const users = new DBmongo("NFTMarketPlace", "users");
const { generatePasswordService } = require("../services/hash.service")

const getUserById = async (req, res) => {

    const userId = req.headers.userid
    const user = await users.getById(userId)
    res.status(200).send(user);

}

const getAllUsers = async (req, res) => {

    const allUsers = await users.get()
    res.status(200).send(allUsers)
}

const updateUser = async (req, res) => {
    const userId = req.headers.userid

    const {firstName, lastName, username, email, password} = req.body

    console.log(req.body, 'req,body');

    const data = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,

    }
    const user = await users.findUserByEmailService(data.email)
    if (user) {
        return res.status(400).send("Email already exist");
    }

    try {
        console.log("Arrived here");
        generatePasswordService(data.password, async (hash) => {
            console.log(hash, 'hash');
            data.password = hash
            console.log(data.password);
            const resp = await users.updateUserService(userId, data)

            res.status(201).send(resp);
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong")
    }
    

    res.send("success")
}

const addNewUser = async (req, res) => {
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