const DBmongo = require("../services/users.service")
const users = new DBmongo("NFTMarketPlace", "users");
const { generatePasswordService } = require("../services/hash.service")


const addNewUser = async (req, res) => {
    console.log("addNewUser")
    // const { email, password } = req.body;

    // change to be req.body

    const length = await users.findCollectionLengthService()

    console.log(length, 'length');
    // const email = "gtuch7777@gmail.com"
    // const password = "testing"
    // const id = length + 1

    const data = {
        username: "test@gmail.com",
        password: "new",
        id: length + 1,
    }

    const user = await users.findUserByEmailService(data.username);

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

addNewUser()