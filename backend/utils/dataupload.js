const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "doqkfgbhz",
  api_key: "541349771793653",
  api_secret: "E5_PjlK_ijRlkJsF_UxbWe8ZQwY",
});

async function uploadImageToCloudinary(imageUrl) {
  try {
    const cloudinaryResponse = await cloudinary.uploader.upload(imageUrl);
    return cloudinaryResponse.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return null;
  }
}

module.exports = {
  uploadImageToCloudinary,
};