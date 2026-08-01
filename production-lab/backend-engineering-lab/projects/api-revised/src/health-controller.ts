import { Request, Response } from "express";

import type { ApplicationContext } from "./context";
import {getHealth} from "./health-service";

export function healthController(

    context: ApplicationContext

) {

    return async function (

        req: Request,

        res: Response

    ) {

        const response = await getHealth(context);
        res.json(response);
    }
}