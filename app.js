const express = require('express');

// Routers
const { usersRouter } = require('./routes/user.routes');
const { tasksRouter } = require('./routes/task.routes');

// Init express app
const app = express();

// Enable JSON data
app.use(express.json());

// Define endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/tasks', tasksRouter);

// Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exist`,
  });
});

module.exports = { app };
