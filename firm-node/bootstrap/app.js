// booting the application
const express = require('express');

// create express application
const app = express();


// registering API and middleware
const kernel = require('../app/Http/kernal');

// todo: why is this used?1
app.use(express.json());

// todo: what is this?1
kernel(app); // pass app into kernel like Laravel does

// todo: what is this?1
module.exports = app;