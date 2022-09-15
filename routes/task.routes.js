const express = require('express');

// Controllers
const {} = require('../controllers/actors.controller');

const taskRouter = express.Router();

taskRouter.post('/');
taskRouter.get('/');
taskRouter.get('/:status');
taskRouter.patch('/:id');
taskRouter.delete('/:id');

module.exports = { actorsRouter };
