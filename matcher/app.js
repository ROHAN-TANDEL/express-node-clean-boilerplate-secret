const express = require('express');
const clientResolver = require('./middleware/clientResolver');

const app = express();

app.use(express.json());

// attach client DB dynamically
app.use(clientResolver);


const userController = require('./controllers/user.controller');
const taxController = require('./controllers/tax.controller');
const gridController = require('./controllers/grid.controller');
const transactionController = require('./controllers/transaction.controller');

app.get('/users/:userId', userController.getUser);
app.get('/returns/all', taxController.returnsAll);
app.get('/grid/columns/user/:userId', gridController.transactionsColumns);
app.get('/transactions/interim/status', transactionController.interimStatus);

module.exports = app;