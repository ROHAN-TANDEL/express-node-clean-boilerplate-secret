const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// -------------------------------------------------------------
// Dependency Injection for Clean Architecture
// -------------------------------------------------------------

const logger = require('../../../presentation/http/middleware/logger.middleware');
app.use(logger);

// Repositories
const UserRepository = require('../../db/repositories/user.repository');
const userRepository = new UserRepository();

// Use Cases
const getUserUseCase = require('../../../domain/use-cases/user/getUser.usecase');
const getUser = getUserUseCase({ userRepository });

// Controllers
const userController = require('../../../presentation/http/controllers/user.controller')(getUser);

// Routes
const userRoutes = require('../../../presentation/http/routes/user.routes')(userController);

// Register routes
app.use('/users', userRoutes);

// -------------------------------------------------------------

module.exports = app;


// import express from "express";
// import userRoutes from "../../../presentation/http/routes/user.routes.js";
//
// export const createApp = (container) => {
//     const app = express();
//     app.use(express.json());
//
//     app.use("/users", userRoutes(container));
//
//     return app;
// };
