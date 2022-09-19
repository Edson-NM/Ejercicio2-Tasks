const express = require('express');

// Controllers
const {
  getAllTasks,
  getTaskByStatus,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks.controllers');

const tasksRouter = express.Router();

tasksRouter.post('/', createTask);
tasksRouter.get('/', getAllTasks);
tasksRouter.get('/:status', getTaskByStatus);
tasksRouter.patch('/:id', updateTask);
tasksRouter.delete('/:id', deleteTask);

module.exports = { tasksRouter };
