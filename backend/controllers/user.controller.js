const DBmongo = require("../services/users.service")
const users = new DBmongo("NFTMarketPlace", "users");
const images = new DBmongo("NFTMarketPlace", "images");
const { generatePasswordService } = require("../services/hash.service")

const getUserById = async (req, res) => {

    const userId = req.me
    const user = await users.getById(userId)
    res.status(200).send(user);
}

const getCardsByUser = async (req , res) => {
    const userId = req.me
    const user = await users.getById(userId)
    const imagesOwned = user.imagesOwned
    const cards = await images.getAllById(imagesOwned)
    res.status(200).send(cards)
}



const getAllUsers = async (req, res) => {
    console.log('here');
    const allUsers = await users.get()
    res.status(200).send(allUsers)
}

const updateUser = async (req, res) => {

    const userId = req.me

    const { firstName, lastName, username, email, password, isAdmin } = req.body

    const data = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        isAdmin: false

    }

    const user = await users.findUserByEmailService(data.email)

    if (user) {
        return res.status(400).send("Email already exist");
    }

    try {
        generatePasswordService(data.password, async (hash) => {
            data.password = hash
            const resp = await users.updateUserService(userId, data)

            res.status(201).send("Succesfully Updated User");
        })

    } catch (error) {
        return res.status(500).send("Something went wrong")
    }

}

const addNewUser = async (req, res) => {

    const { firstName, lastName, username, email, password, isAdmin } = req.body;


    const data = {
        firstName, lastName, username, email, password, isAdmin
    }

    const user = await users.findUserByEmailService(data.email);

    if (user) {
        return res.status(400).send("Email already exist")
    }


    try {
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
    const userId = req.params.id
    console.log(userId);
    await users.deleteUserService(userId)
    res.send("User deleted succesfully")
}

const userBoughtImage = async (req, res) => {
    // const {uri, description, isSold, title, isInCart} = req.body

    const userId = req.me
    console.log(req.body, 'reqbody');
    const ImageId = req.body



    const resp = await users.updateUserImagesService(userId, ImageId);
    console.log("yellow");
    const resp2 = await images.emptyImages(userId, ImageId);
    console.log('red');
    res.status(201).send(resp);

}

const userAddedImageToCart = async (req, res) => {

    const userId = req.me
    const ImageId = req.body.id

    const resp = await users.updateUserCartService(userId, ImageId);
    const resp2 = await images.updateImageCartService(userId, ImageId);
    res.status(201).send(resp);

}

const removeFromUserCart = async (req,res) => {
    const userId = req.me
    const ImageId = req.body.id

    const resp = await users.removeUserCartService(userId, ImageId);
    const resp2 = await images.removeImageCartService(userId, ImageId);
    res.status(201).send(resp);
}



module.exports = {
    addNewUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
    userBoughtImage,
    getCardsByUser,
    userAddedImageToCart,
    removeFromUserCart
}