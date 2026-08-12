import type { Request,  Response, NextFunction } from "express";
import {ZodError} from "zod";

export function errorHandlerMiddleware(

    error: any,

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

    const statusCode = error.status || 500;

    // Log the error for internal debugging
    console.error(`[Error] ${error.message}`);

    // Send a clean, unified response to the client
    res.status(statusCode).json({
        success: false,
        message: error.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    });

    return res.status(500).json({

        message: error.message

    });



}

export default GlobalErrorMiddleware;