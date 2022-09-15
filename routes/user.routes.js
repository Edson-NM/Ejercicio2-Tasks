const express = require('express');

// Controllers
const {
  createUser,
  getAllUsers,
  updateUSer,
  deleteUSer,
} = require('../controllers/users.controllers');

const usersRouter = express.Router();

usersRouter.post('/', createUser);
usersRouter.get('/', getAllUsers);
usersRouter.patch('/:id', updateUSer);
usersRouter.delete('/:id', deleteUSer);

module.exports = { actorsRouter };
