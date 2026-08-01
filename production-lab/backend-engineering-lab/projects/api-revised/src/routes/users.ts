import type { Express } from "express";
import type { ApplicationContext } from "../context";

import { usersController } from "../controllers/users-controller";

export function registerUsers(
    app: Express,
    context: ApplicationContext
) {

    app.get(

        "/users",

        usersController(context)

    );

}