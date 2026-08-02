


import type { Express } from "express";
import type { ApplicationContext } from "../context";
import { userController } from "../controllers/users-controller";
import {validate} from "../middleware/validate";
import {createUserSchema} from "../validators/user";

export function registerUsers(

    app: Express,

    context: ApplicationContext

) {

    const userControl = userController(context);

    app.get("/users", userControl.getUsers);

    app.get("/users/:id", userControl.getUserById);

    app.post("/user", validate(createUserSchema), userControl.createUser);

}