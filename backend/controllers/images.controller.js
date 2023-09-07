const DBmongo = require("../services/users.service")
const images = new DBmongo("NFTMarketPlace", "images");


const getImageById = async (req, res) => {
    imageId = "64f4589da54828bc9f9df846"
    const image = await images.getById(imageId)
    res.status(200).send(image);
}

const getAllImages = async (req, res) => {

    const userId = req.me
    // Extract filter parameters from the query string
    const minPrice = parseFloat(req.query.minPrice);
    const maxPrice = parseFloat(req.query.maxPrice);
    const category = req.query.category;

    // Create a filter object based on the provided parameters
    const filter = {};
    if (!isNaN(minPrice)) {
        filter.price = { $gte: minPrice };
    }
    if (!isNaN(maxPrice)) {
        filter.price = { ...filter.price, $lte: maxPrice };
    }
    if (category) {
        filter.category = category;
    }

    const allImages = await images.get(userId, filter)
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
        uri: "https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg",
        description: "A golden odldie",
        isSold: true,
        title: "Paradise",
        price: 125,
        category: "Semi Detached",
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