const DBmongo = require("../services/users.service");
const { createImage, createImageDetails } = require("../utils/datagen");
const images = new DBmongo("NFTMarketPlace", "images");
const users = new DBmongo("NFTMarketPlace", "users");


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

    // const help = await images.helper(userId, filter)

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
        InCart: [],
        price: 115
    }

    const resp = await images.updateImageService(imageId, data)

    res.status(201).send(resp);

}

const addNewImage = async (req, res) => {
    try {
        const generatedImageUrl = await createImage();
        const generatedImageDetails = await createImageDetails();
        console.log({ generatedImageUrl }, { generatedImageDetails });

        const data = {
            uri: `${generatedImageUrl}`,
            description: `${generatedImageDetails.description}`,
            isSold: true,
            title: `${generatedImageDetails.title}`,
            price: Math.floor(Math.random() * 61) + 100,
            category: "Semi Detached",
            InCart: []
        }
        const resp = await images.addNewImageService(data);
        res.status(201).send(resp);
    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).json({ error: "Image generation failed." });
    }
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