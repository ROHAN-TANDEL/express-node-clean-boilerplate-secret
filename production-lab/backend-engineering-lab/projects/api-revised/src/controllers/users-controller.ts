import { Request, Response } from "express";

import type { ApplicationContext } from "../context";

import {getUsers, getUserById } from "../services/users-service";

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

        const id = Number(req.params.id);

        const user = await getUserById(
            context,
            id
        );

        res.json(user);

    };

}