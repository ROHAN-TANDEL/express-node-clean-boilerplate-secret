import type { Express } from "express";
import type { ApplicationContext } from "../context";

import {createUserByIdController, usersController, createCreateUserController} from "../controllers/users-controller";
import {validate} from "../middleware/validate";
import {createUserSchema} from "../validators/user";

export function registerUsers(
    app: Express,
    context: ApplicationContext
) {

    app.get(

        "/users",

        usersController(context)

    );

    app.get(

        "/users/:id",

        createUserByIdController(context)

    );


    app.post(
        "/users",
        validate(createUserSchema),
        createCreateUserController(
            context
        )
    );


}