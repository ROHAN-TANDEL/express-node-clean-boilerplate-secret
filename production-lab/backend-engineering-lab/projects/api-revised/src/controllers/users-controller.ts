import { Request, Response } from "express";

import type { ApplicationContext } from "../context";

import {getUsers} from "../services/users-service";

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