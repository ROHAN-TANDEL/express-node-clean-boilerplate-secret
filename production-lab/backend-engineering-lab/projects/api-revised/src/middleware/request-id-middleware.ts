import { randomUUID } from "crypto";
import type {
    Request,
    Response,
    NextFunction
} from "express";

export function requestIdMiddleware(

    req: Request,

    res: Response,

    next: NextFunction

) {

    req.headers["x-request-id"] ??=

        randomUUID();

    res.locals.requestId =

        req.headers["x-request-id"];

    next();

}