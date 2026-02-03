// booting the application
const express = require('express');

// create express application
const app = express();


// registering API and middleware
const kernel = require('../app/Http/kernal');

// todo: why is this used?
app.use(express.json());

// todo: what is this?
kernel(app); // pass app into kernel like Laravel does

// todo: what is this?
module.exports = app;