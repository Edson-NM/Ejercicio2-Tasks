const express = require('express');

// Controllers
const {
  createUser,
  getAllUsers,
  updateUSer,
  deleteUSer,
} = require('../controllers/users.controllers');

// Middleware
const { userExist } = require('../middlewares/users.middlewares');
const {
  createUserValidators,
} = require('../middlewares/validators.middlewares');

const usersRouter = express.Router();

usersRouter.post('/', createUserValidators, createUser);
usersRouter.get('/', getAllUsers);
usersRouter.patch('/:id', userExist, updateUSer);
usersRouter.delete('/:id', userExist, deleteUSer);

module.exports = { usersRouter };
