
import type { NextFunction, Request, Response } from "express";
import { AppError } from "./index";


export function errorHandler(

    error: unknown,

    req: Request,

    res: Response,

    next: NextFunction

)
{
    if (error instanceof AppError) {

        return res.status(

            error.statusCode

        ).json({
            data: "request error",
            message: error.message

        });

    }

    console.log(error);
    return res.status(500).json({

        message: "Internal Server Error"

    });

}