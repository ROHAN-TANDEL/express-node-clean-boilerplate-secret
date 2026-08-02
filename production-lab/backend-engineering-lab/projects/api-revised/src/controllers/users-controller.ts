import {NextFunction, Request, Response} from "express";

import type { ApplicationContext } from "../context";

import { getUsers, getUserById, createUser } from "../services/users-service";

import {createUserSchema} from "../validators/user";

export function usersController(

    context: ApplicationContext

) {

    return async function (

        req: Request,

        res: Response,

        next: NextFunction

    ) {

        try {
            const response = await getUsers(context);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
}


export function createUserByIdController(
    context: ApplicationContext
) {

    return async function (
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

            const user = await getUserById(
                context,
                id
            );

            res.json(user);
        }  catch (error) {
            next(error);
        }


    };

}


export function createCreateUserController(
    context: ApplicationContext
) {

    return async function (
        req: Request,
        res: Response,
        next: NextFunction
    ) {



        try {

            const user = await createUser(

                context,

                req.body

            );

            res.status(201).json(

                user

            );
        } catch (error) {
            next(error);
        }

    };

}