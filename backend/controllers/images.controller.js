


// get all images - all images can see

//getimagebyid - all images can see

// put by id - only admin

// delete by id -only admin

// post new image - only admin 

const DBmongo = require("../services/users.service")
const images = new DBmongo("NFTMarketPlace", "images");


const getImageById = async (req, res) => {
    imageId = "64f4589da54828bc9f9df846"
    const image = await images.getById(imageId)
    res.status(200).send(image);

}

const getAllImages = async (req, res) => {
    const allImages = await images.get()
    res.status(200).send(allImages)
}

const updateImage = async (req, res) => {

    imageId = "64f4589da54828bc9f9df846"
    const data = {
        uri: "https://st.hzcdn.com/simgs/pictures/facades-de-maisons/random-picture-of-houses-sold-by-us-regine-villedieu-immobilier-img~986136b80204f124_9-9327-1-d1acfe3.jpg",
        description: "A wonderful peice of art",
        isSold: true,
        title: "Image 3",
        isInCart: []
    }

    const resp = await images.updateImageService(imageId, data)

    res.status(201).send(resp);

}

const addNewImage = async (req, res) => {
    // const {uri, description, isSold, title, isInCart} = req.body

    const data = {
        uri: "https://st.hzcdn.com/simgs/pictures/facades-de-maisons/random-picture-of-houses-sold-by-us-regine-villedieu-immobilier-img~986136b80204f124_9-9327-1-d1acfe3.jpg",
        description: "A bveaitufl peice of art",
        isSold: true,
        title: "Image 2",
        isInCart: []
    }

    const resp = await images.addNewImageService(data);

    res.status(201).send(resp);

}

const deleteImage = async (req, res) => {
    const imageId = "64f4589da54828bc9f9df846"
    await images.deleteImageService(imageId)
    res.send("User deleted succesfully")
}

module.exports = {
    addNewImage,
    getImageById,
    getAllImages,
    updateImage,
    deleteImage
}