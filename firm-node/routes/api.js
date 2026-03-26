//todo: again express is initiated for Router, why its already done in index.js right?1
const router = require('express').Router();

// invoking controller
const HomeController = require('../app/Http/Controllers/HomeController');

//middleware
const Auth = require('../app/Http/Middleware/Auth');

// setup and registration
router.post('/hello/login', Auth, HomeController.index);


// todo: does module.export means its returns by file end?
module.exports = router;