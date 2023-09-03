// imageGenerator.js
const { OpenAI } = require("openai");

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
    return RESPONSE.data[0].url;
  } catch (err) {
    // Handle errors as needed
    throw err;
  }
}

module.exports = { createImage };
