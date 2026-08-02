import type {

    NextFunction,

    Request,

    Response

} from "express";

import {ZodError} from "zod";

export function errorHandler(

    error: Error,

    req: Request,

    res: Response,

    next: NextFunction

) {


    if (

        error instanceof ZodError

    ) {

        return res.status(400).json({

            message: error.message,

            errors: error.issues

        });

    }

    return res.status(500).json({

        message: error.message

    });



}