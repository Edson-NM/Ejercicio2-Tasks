const { json } = require('body-parser');
const express = require('express');

// Routers

// Init express app
const app = express();

// Enable JSON data
app.use(json());

// Define endpoints
app.use('api/v1/users');
app.use('api/v1/tasks');

// Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exist`,
  });
});

module.exports = { app };
