import type {

    NextFunction,
    Request,
    Response

} from "express";
import {AppError} from "../errors";

export function roleMiddleware(

    role: string

) {

    return function (

        req: Request,

        res: Response,

        next: NextFunction

    ) {

        if ( req.user?.role !== role ) { throw new AppError( 403, "Forbidden" ); }
        next();
    };

}