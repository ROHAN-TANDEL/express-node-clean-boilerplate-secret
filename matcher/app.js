const express = require('express');
const clientResolver = require('./middleware/clientResolver');

const app = express();

app.use(express.json());

// attach client DB dynamically
app.use(clientResolver);


const userController = require('./controllers/user.controller');

app.get('/user-details', userController.getUser);


module.exports = app;