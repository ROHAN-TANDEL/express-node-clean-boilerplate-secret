const express = require('express');
const validateId = require('../middleware/validateId.middleware');

const validateRequest = require('../middleware/validateRequest.middleware');
const { createUserSchema } = require('../validation/user.validation');


module.exports = function userRoutes(controller) {

    const router = express.Router();

    router.post('user-check/:id', validateRequest(createUserSchema), controller.getById);

    router.get('/:id', validateId, controller.getById);

    return router;
};


//
// import { Router } from "express";
//
// export default (container) => {
//     const router = Router();
//     const controller = container.resolve("userController");
//
//     router.get("/:id", controller.getUser);
//     router.get("/", controller.listUsers);
//     router.post("/", controller.createUser);
//     router.put("/:id", controller.updateUser);
//     router.delete("/:id", controller.deleteUser);
//
//     return router;
// };
