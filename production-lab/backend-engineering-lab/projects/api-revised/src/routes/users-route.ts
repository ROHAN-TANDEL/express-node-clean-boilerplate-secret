


import type { Express } from "express";
import type { ApplicationContext } from "../context";
import { userController } from "../controllers/users-controller";
import {validateMiddleware} from "../middleware/validate-middleware";
import {createUserSchema} from "../validators/user-validator";
import {userService} from "../services/users-service";
import {usersRepository} from "../repositories/users-repository";


import { asyncHandlerMiddleware } from "../middleware/async-handler-middleware";
import {authMiddleware} from "../middleware/auth-middleware";
import {auth} from "../auth";
import {roleMiddleware} from "../middleware/role-middleware";

export function registerUsers(

    app: Express,

    context: ApplicationContext

) {

    const userRepo = usersRepository(context);
    const userServ = userService(context, userRepo);
    const userControl = userController(userServ);

    app.get("/users", authMiddleware(auth), roleMiddleware("client"), asyncHandlerMiddleware(userControl.getUsers));
    app.get("/users/:id", userControl.getUserById);
    app.post("/user", validateMiddleware(createUserSchema), userControl.createUser);

}