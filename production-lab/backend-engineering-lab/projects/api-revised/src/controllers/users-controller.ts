import {NextFunction, Request, Response} from "express";

import type { ApplicationContext } from "../context";

import {
        getUsers as getUsersServ,
        getUserById as getUserByIdServ,
        createUser as createUserServ,
        } from "../services/users-service";


export function userController(context: ApplicationContext)
{

    async function getUsers(
        req: Request,
        res: Response,
        next: NextFunction

    ) {

        try {

            const response = await getUsersServ(context);

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

            const user = await getUserByIdServ(context, id);

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

            const user = await createUserServ(context, req.body);

            res.status(201).json(user);

        } catch (error) {

            next(error);

        }
    }


    return {

        getUsers: getUsers,

        getUserById: getUserById,

        createUser: createUser

    };

}
