const  { Router } = require('express');

/**
 * welcomeRoute
 *
 * Router function
 *
 * @param WelcomeController
 * @returns {*}
 */
function welcomeRoute({ WelcomeController }) {
    // get router object
    const router = new Router();

    // register route for a controller function
    router.get('/', WelcomeController.getWelcome);

    // return route
    return router;
}


module.exports = welcomeRoute;