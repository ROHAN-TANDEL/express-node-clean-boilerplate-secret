import { Request, Response } from "express";

import type { ApplicationContext } from "./context/context";
import {getHealth} from "./health-service";

export function healthController(

    context: ApplicationContext

) {

    return function (

        req: Request,

        res: Response

    ) {

        const response = getHealth(context);
        res.json(response);
    }
}