import {auth} from "../auth";
import {usersRepository} from "../repositories/users-repository";
import {authService} from "../auth/services/auth-service";
import {authController} from "../controllers/auth-controller";
import {Express} from "express";
import {ApplicationContext} from "../context";
import {asyncHandlerMiddleware} from "../middleware/async-handler-middleware";
export function registerAuth(

    app: Express,

    context: ApplicationContext

) {

    const authProvider = auth();

    const userRepo = usersRepository(context);

    const authServ = authService(authProvider, userRepo);

    const authControl = authController(authServ);

    app.post("/login", asyncHandlerMiddleware(authControl.loginUser));


}