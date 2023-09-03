const { OpenAI } = require("openai");
const FS = require("fs");

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
    // Extract relevant error information for logging
    const errorInfo = {
      message: err.message,
      name: err.name,
      stack: err.stack,
    };

    // Log the error information without circular references
    console.error("Error in createImage:", errorInfo);

    // Rethrow the error
    throw err;
  }
}


const prompt =
  "Generate an image featuring the interior of a modest, newly built apartment's living room, ideal for an NFT card on a virtual real estate NFT marketplace. The central focus should be a comfortable yet budget-friendly sofa, surrounded by simple furnishings and decor. The living room should exude a cozy and approachable atmosphere, showcasing practicality and comfort. Consider elements like basic lighting, affordable decorations, and a color palette that conveys simplicity. Capture the essence of an affordable yet inviting living space, highlighting its value and suitability for budget-conscious buyers.";

async function createImage(prompt) {
  try {
    const RESPONSE = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    return RESPONSE.data[0].url;
  } catch (err) {
    // Extract relevant error information for logging
    const errorInfo = {
      message: err.message,
      name: err.name,
      stack: err.stack,
    };

    // Log the error information without circular references
    console.error("Error in createImage:", errorInfo);

    // Rethrow the error
    throw err;
  }
}

module.exports = {
  createImage,
};
