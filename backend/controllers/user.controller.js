const DBmongo = require("../services/users.service")

const users = new DBmongo("NFTMarketPlace", "users");


const addNewUser = async (req, res) => {
    console.log("addNewUser")
    // const { email, password } = req.body;

    const email = "gtuch7777@gmail.com"
    const password = "testing"

    const user = await users.findUserByEmailService(email);
    console.log(user);
    if (user) {
        console.log("already exists");
        return res.status(400).send("Email already exist")
       
    }


    try {
        generatePasswordService(password, async (hash) => {
            const resp = await addNewUserService(req.body, hash);

            res.status(201).send(resp);
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong")
    }
}

addNewUser()