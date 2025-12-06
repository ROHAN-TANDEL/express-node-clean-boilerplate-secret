/**
 * server js
 *
 * @description server js starting the server application on port 3000 default
 *
 */

/**
 * @type {*|Express|{}}
 */
const app = require('./app');

/**
 * port default 3000
 * @type {number}
 */
const port = 3000;

/**
 * register the express application
 */
app.listen(port, function () {
    console.log(`Express server listening on port ${port}`);
})

module.exports = app;

/**
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
sample code of for running express js
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
module.exports = app;
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
end
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */