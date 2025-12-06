/**
 * WelcomeController
 *
 * This controller handles requests to the welcome page of the application.
 */
class WelcomeController {

    /**
     * constructor
     *
     * execute the function as soon as the object is created
     */
    constructor() {}

    /**
     * getWelcome
     *
     * return welcome text message on function call
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    getWelcome(req, res, next) {
        const message = 'welcome to welcome controller';
        res.send(message);
    }
}

module.exports = WelcomeController;
