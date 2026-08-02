import {NextFunction, Request, Response} from "express";

import type { ApplicationContext } from "../context";

import { userService } from "../services/users-service";


export function userController(userServ: ReturnType<typeof userService>)
{
    async function getUsers(
        req: Request,
        res: Response,
        next: NextFunction

    ) {

        try {

            const response = await userServ.getUsers();

            res.json(response);

        } catch (error) {
            next(error);
        }
    }




    async function getUserById(
        req: Request,
        res: Response,
        next: NextFunction
    ) {


        try {

            const id = Number(
                req.params.id
            );

            if (Number.isNaN(id)) {

                return res.status(400).json({

                    message: "Invalid user id"

                });

            }

            const user = await userServ.getUserById(id);

            res.json(user);

        }  catch (error) {

            next(error);

        }
    }


    async function createUser(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {

            const user = await userServ.createUser(req.body);

            res.status(201).json(user);

        } catch (error) {

            next(error);

        }
    }


    return {

        getUsers,

        getUserById,

        createUser

    };

}
