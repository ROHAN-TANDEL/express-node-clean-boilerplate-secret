import { Request, Response } from "express";

import type { ApplicationContext } from "../context";

import { getUsers, getUserById, createUser } from "../services/users-service";

import {createUserSchema} from "../validators/user";

export function usersController(

    context: ApplicationContext

) {

    return async function (

        req: Request,

        res: Response

    ) {

        const response = await getUsers(context);
        res.json(response);
    }
}


export function createUserByIdController(
    context: ApplicationContext
) {

    return async function (
        req: Request,
        res: Response
    ) {

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

    };

}


export function createCreateUserController(
    context: ApplicationContext
) {

    return async function (
        req: Request,
        res: Response
    ) {

        const input = createUserSchema.parse(

            req.body

        );


        const user = await createUser(

            context,

            input

        );

        res.status(201).json(

            user

        );


    };

}