import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export function validate(

    schema: ZodSchema

) {

    return function (

        req: Request,

        res: Response,

        next: NextFunction

    ) {

        req.body = schema.parse(

            req.body

        );

        next();

    };

}