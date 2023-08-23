const express = require('express');
const route = express.Router();

const { addNewUser, getUserById, getAllUsers } = require("../controllers/user.controller");

route.get('/', getAllUsers);
route.get('/:id', getUserById);
route.post('/', addNewUser)

module.exports = route;