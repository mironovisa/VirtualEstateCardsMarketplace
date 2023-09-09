// imageGenerator.js
const { OpenAI } = require("openai");
const { getCloudinaryUrl } = require("./dataupload");

const openai = new OpenAI({
  apiKey: process.env.DALLE_API_KEY,
});

const housingArchitecture = [
  "Colonial Revival",
  "Tudor Revival",
  "Dutch Colonial Revival",
  "American Craftsman",
  "Ranch-style House",
]

const interiorDesign = [
  "Modern",
  "Contemporary",
  "Minimalist",
  "Industrial",
  "Scandinavian",
  "Traditional",
  "Transitional",
]

const housingBuild = [
  "Newly Built",
  "Recently Built",
  "Newly Constructed",
]

const housingType = [
  "Single Family Home",
  "Townhouse",
  "Apartment",
  "Cottage",
  "Villa",
  "Condo",
  "Duplex",
  "Mansion"
]

const createPrompt = async () => {

  const housingArchitecturePrompt = housingArchitecture[Math.floor(Math.random() * housingArchitecture.length)];
  const interiorDesignPrompt = interiorDesign[Math.floor(Math.random() * interiorDesign.length)];
  const housingBuildPrompt = housingBuild[Math.floor(Math.random() * housingBuild.length)];
  const housingTypePrompt = housingType[Math.floor(Math.random() * housingType.length)];

  try {
    const RESPONSE = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        "role": "system",
        "content": `Generate a propmt for a realistic professional photo-like real estate image. The prompt should be a description of a living room in a ${housingTypePrompt}. The prompt should include the following: ${housingArchitecturePrompt} as the style of the house, ${interiorDesignPrompt} as the style of the interior design and ${housingBuildPrompt} as the state of the house. The prompt should be between 6-7 lines
        make sure that the following details are included:
        1. Natural lighting that complements the space.
        2. Realistic furniture placement and decor.
        3. High-resolution image with sharp details.
        4. An inviting atmosphere that emphasizes the property's appeal.
        5. A focus on the most attractive features of the ${housingTypePrompt}.
        The final image should resemble a professional real estate photograph, suitable for showcasing the property online or in print. Feel free to add any additional details that enhance the realism of the image. Please create this image with careful attention to detail, and ensure it looks like an authentic real estate photo, AND MAKE IT LOOK LIKE AN ACTUAL PHOTO AND NOT AT ALL LIKE A PAINTING!.`
      }]
    });
    console.log("Prompt Sent!");
    return RESPONSE.choices[0].message.content;
  } catch (err) {
    throw err.error.message;
  }
}

const createImage = async () => {
  const prompt = await createPrompt();
  console.log("Prompt: ", prompt)
  try {
    const RESPONSE = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    const imageCloudinaryUrl = await getCloudinaryUrl(RESPONSE.data[0].url);
    createImageDetails(imageCloudinaryUrl);
    return imageCloudinaryUrl;
  } catch (err) {
    throw err;
  }
}

const createImageDetails = async (generatedImage) => {
  try {
    const RESPONSE = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        "role": "system",
        "content": `Generate a description and title for the image in this link: ${generatedImage}, The description should be 3-5 sentences long and the title should be 1 line.
        Reply in JSON format only`
      }]
    });
    return JSON.parse(RESPONSE.choices[0].message.content);
  } catch (err) {
    throw err;
  }
}

module.exports = { createImage, createImageDetails };