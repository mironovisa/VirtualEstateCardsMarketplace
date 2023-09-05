const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function getCloudinaryUrl(imageUrl) {
  try {
    const cloudinaryResponse = await cloudinary.uploader.upload(imageUrl);
    return cloudinaryResponse.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return null;
  }
}

module.exports = {
  getCloudinaryUrl,
};