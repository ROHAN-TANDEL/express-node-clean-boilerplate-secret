/**
 * index.js
 * register the routes
 */

/**
 * routes list
 *
 * @type {(function({WelcomeController: *}): *)|{}}
 */
const welcomeRoutes = require('./WelcomeRoute');

/**
 * index
 *
 * execute all the registered routes
 *
 * @param app
 * @param container
 */
function api(app, container) {

    app.use('/index/route/welcome', function(req, res, next) {
        res.send('index route');
    });

    // middleware register
    app.use('/', welcomeRoutes(container.cradle));
}

// export function
module.exports = api;
