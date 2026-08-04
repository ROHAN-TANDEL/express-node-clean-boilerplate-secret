import {NextFunction, Request, Response} from "express";

import type { ApplicationContext } from "../context";

import { userService } from "../services/users-service";
import {AppError} from "../errors";


export function userController(userServ: ReturnType<typeof userService>)
{
    async function getUsers(req: Request, res: Response, next: NextFunction)
    {

        try {

            console.log(req.user);
            const response = await userServ.getUsers();

            res.json(response);

        } catch (error) {
            next(error);
        }
    }




    async function getUserById(req: Request, res: Response)
    {

            const id = Number(req.params.id);

            if (Number.isNaN(id)) { throw new AppError(400, "Invalid user id"); }

            const user = await userServ.getUserById(id);

            res.json(user);

    }


    async function createUser(req: Request, res: Response)
    {
            const user = await userServ.createUser(req.body);

            res.status(201).json(user);

            res.json(user);
    }


    return {

        getUsers,

        getUserById,

        createUser

    };

}
