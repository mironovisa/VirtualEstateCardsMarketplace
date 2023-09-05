// imageGenerator.js
const { OpenAI } = require("openai");
const { getCloudinaryUrl } = require("./dataupload");

const openai = new OpenAI({
  apiKey: process.env.DALLE_API_KEY,
});


async function createImage(prompt) {
  try {
    const RESPONSE = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    const imageCloudinaryUrl = await getCloudinaryUrl(RESPONSE.data[0].url);
    return imageCloudinaryUrl;
  } catch (err) {
    // Handle errors as needed
    throw err;
  }
}

module.exports = { createImage };
