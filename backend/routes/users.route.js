const express = require('express');
const route = express.Router();

const { addNewUser, getUserById, getAllUsers, updateUser, deleteUser } = require("../controllers/user.controller");

route.get('/', getAllUsers);
route.get('/:id', getUserById);
route.post('/', addNewUser);
route.put('/:id', updateUser);
route.delete('/:id', deleteUser);

module.exports = route;