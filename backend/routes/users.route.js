const express = require('express');
const route = express.Router();
const { signupSchema } = require("../schema/signup.schema")
const { validateSchema } = require('../schema/validate');


const { addNewUser, getUserById, getAllUsers, updateUser, deleteUser, userBoughtImage } = require("../controllers/user.controller");

route.get('/', getAllUsers);
route.get('/:id', getUserById);
route.post('/', validateSchema(signupSchema), addNewUser);
route.put('/:id', updateUser);
route.put('/bought/:id', userBoughtImage)
route.delete('/:id', deleteUser);

module.exports = route;