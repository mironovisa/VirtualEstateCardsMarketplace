const express = require("express");
const route = express.Router();

const {
  addNewImage,
  getImageById,
  getAllImages,
  updateImage,
  deleteImage,
} = require("../controllers/images.controller");

route.get("/", getAllImages);
route.get("/:id", getImageById);
route.post("/", addNewImage);
route.put("/:id", updateImage);
route.delete("/:id", deleteImage);

module.exports = route;
