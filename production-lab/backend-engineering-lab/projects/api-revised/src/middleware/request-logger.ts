import type {

    Request,

    Response,

    NextFunction

} from "express";

import type {

    ApplicationContext

} from "../context";

export function createRequestLogger(

    context: ApplicationContext

) {

    return function (

        req: Request,

        res: Response,

        next: NextFunction

    ) {

        context.logger.info({

            requestId:

            res.locals.requestId,

            method:

            req.method,

            path:

            req.originalUrl

        });

        next();

    };

}