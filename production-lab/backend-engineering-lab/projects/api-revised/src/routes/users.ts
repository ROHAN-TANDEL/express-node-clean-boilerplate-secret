


import type { Express } from "express";
import type { ApplicationContext } from "../context";
import { userController } from "../controllers/users-controller";
import {validate} from "../middleware/validate";
import {createUserSchema} from "../validators/user";
import {userService} from "../services/users-service";
import {usersRepository} from "../repositories/users-repository";


import { asyncHandler } from "../middleware/async-handler";

export function registerUsers(

    app: Express,

    context: ApplicationContext

) {

    const userRepo = usersRepository(context);
    const userServ = userService(userRepo);
    const userControl = userController(userServ);

    app.get("/users", asyncHandler(userControl.getUsers));
    app.get("/users/:id", userControl.getUserById);
    app.post("/user", validate(createUserSchema), userControl.createUser);

}