const { OpenAI } = require("openai");

require("dotenv").config();
const { DALLE_API_KEY } = process.env;

const OPENAI = new OpenAI({ apiKey: DALLE_API_KEY });

module.exports = OPENAI;
