const OPENAI = require("../config/openAI.config"); // Adjust the path accordingly
const FS = require("fs");

const prompt = 
"Generate an image featuring the interior of a modest, newly built apartment's living room, ideal for an NFT card on a virtual real estate NFT marketplace. The central focus should be a comfortable yet budget-friendly sofa, surrounded by simple furnishings and decor. The living room should exude a cozy and approachable atmosphere, showcasing practicality and comfort. Consider elements like basic lighting, affordable decorations, and a color palette that conveys simplicity. Capture the essence of an affordable yet inviting living space, highlighting its value and suitability for budget-conscious buyers."

async function createImage(prompt) {
  try {
    const RESPONSE = await OPENAI.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    return RESPONSE.data.data[0].url;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function updateImage(imageUrl) {
  try {
    const RESPONSE = await OPENAI.createImageEdit(
      FS.createReadStream(imageUrl),
      null,
      "Add upgraded furniture to the living room.",
      1,
      "1024x1024"
    );
    return RESPONSE.data.data[0].url;
  } catch (err) {
    console.error("Error in updating image:", err);
    throw new Error("An error occurred while updating the image.");
  }
}

module.exports = {
  createImage,
  updateImage,
};
