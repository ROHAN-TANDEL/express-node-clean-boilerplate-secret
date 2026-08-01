import type { Express } from "express";
import type { ApplicationContext } from "../context";

import {createUserByIdController, usersController, createCreateUserController} from "../controllers/users-controller";

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
        createCreateUserController(
            context
        )
    );


}