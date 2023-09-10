// imageGenerator.js
const { OpenAI } = require("openai");
const { getCloudinaryUrl } = require("./dataupload");

const openai = new OpenAI({
  apiKey: process.env.DALLE_API_KEY,
});

const artStyle = [
  "Cubism",
  "Surrealism",
  "Realism",
  "Abstract Expressionism",
  "Romanticism",
  "Pop Art",
  "Impressionism",
  "Renaissance",
  "Fauvism",
  "Post-Impressionism",
]

const createPrompt = async () => {

  const artStylePrompt = artStyle[Math.floor(Math.random() * artStyle.length)];

  try {
    const RESPONSE = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        "role": "system",
        "content": `Generate a prompt for a ${artStylePrompt} painting, the painting should be fitting for an NFT market place. The prompt should be 3-5 sentences long.`
      }]
    });
    console.log("Prompt Sent!");
    return RESPONSE.choices[0].message.content;
  } catch (err) {
    console.log("createPrompt error")
    // throw err.error.message;
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
    console.log("createImage error")
    // throw err;
  }
}

const createImageDetails = async (generatedImage) => {
  try {
    const RESPONSE = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        "role": "system",
        "content": `Analyze the provided image in this link ${generatedImage} and generate a detailed description that includes specific elements, colors, and the overall mood of the scene. Additionally, create a concise and fitting title that encapsulates the essence of the image. Ensure that both the description and title are as accurate and representative of the image as possible, take youre time generating these. Reply in JSON format only and name the values "description" and "title" respectively.`
      }]
    });
    return JSON.parse(RESPONSE.choices[0].message.content);
  } catch (err) {
    console.log("createImageDetails error")
    // throw err;
  }
}

module.exports = { createImage, createImageDetails };