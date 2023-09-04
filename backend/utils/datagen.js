// imageGenerator.js
const { OpenAI } = require("openai");
const { uploadImageToCloudinary } = require("./dataupload");
const cloudinary = require('cloudinary').v2;

const openai = new OpenAI({
  apiKey: process.env.DALLE_API_KEY,
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function createImage(prompt) {
  try {
    const RESPONSE = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    uploadImageToCloudinary(RESPONSE.data[0].url);
  } catch (err) {
    // Handle errors as needed
    throw err;
  }
}

module.exports = { createImage };
