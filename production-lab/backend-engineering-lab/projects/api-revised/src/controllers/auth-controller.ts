import type {

    Request,
    Response

} from "express";
import {authService} from "../auth/services/auth-service";


export function authController(

    authServ: ReturnType<typeof authService>

) {

    async function loginUser(req: Request, res: Response)
    {

        const {email, password } = req.body;

        const response = await authServ.login(email, password);

        res.json(response);

    }

    return {

        loginUser

    };

}