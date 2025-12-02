
const { createContainer, asClass } = require("awilix");

/**
 * controllers list
 *
 * @type {WelcomeController|{}}
 */
const WelcomeController = require('../presentation/http/controllers/WelcomeController');


/**
 * setContainer
 *
 * DI container for registering controllers
 *
 * @returns {*}
 */
function setContainer() {

    // create container
    const container = createContainer();

    // register object to container in singleton
    container.register({
        WelcomeController: asClass(WelcomeController).singleton(),
    });

    // return container
    return container;
}

// export function
module.exports = setContainer;