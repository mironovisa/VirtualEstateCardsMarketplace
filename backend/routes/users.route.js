const express = require('express');
const route = express.Router();
const { signupSchema } = require("../schema/signup.schema")
const { validateSchema } = require('../schema/validate');


const { removeFromUserCart, addNewUser, userAddedImageToCart, getCardsByUser, getUserById, getAllUsers, updateUser, deleteUser, userBoughtImage } = require("../controllers/user.controller");

route.get('/', getAllUsers);
route.get('/id', getUserById);
route.get('/:id/images', getCardsByUser)
route.post('/', validateSchema(signupSchema), addNewUser);
route.put('/', updateUser);
route.put('/bought/', userBoughtImage)
route.put('/cart/', userAddedImageToCart)
route.put('/cart/remove', removeFromUserCart)
route.delete('/:id', deleteUser);

module.exports = route;