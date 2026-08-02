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

        const startedAt = Date.now();

        res.on(

            "finish",

            () => {

                context.logger.info({

                    requestId:

                    res.locals.requestId,

                    method:

                    req.method,

                    path:

                    req.originalUrl,

                    status:

                    res.statusCode,

                    duration:

                        Date.now() - startedAt + "ms"

                });

            }

        );

        next();

    };

}