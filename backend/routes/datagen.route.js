const express = require("express");
const { createImage } = require("../services/imageGen.service");
const route = express.Router();

route.post("/createImage", createImage);

module.exports = route;
