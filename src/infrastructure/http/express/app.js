const express = require('express');
const setContainer = require('../../../main/container');
const api = require('../../../presentation/http/routes/api');

/**
 * access app factory object
 *
 * @type {*|Express}
 */
const app = express();

/**
 * execute/run container
 */
const container = setContainer();

/**
 * @description loading / attaching container to app
 */
api(app, container);

/**
 * export app after route loading
 *
 * @type {*|Express}
 */
module.exports = app;
