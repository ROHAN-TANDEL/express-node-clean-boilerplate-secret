import { Request, Response } from "express";

import type { ApplicationContext } from "./context/context";

export function healthController(

    context: ApplicationContext,

    req: Request,

    res: Response

) {

    context.logger.info("Health endpoint called");

    res.json({

        status: "healthy",

        service: context.config.app.name,

        uptime: process.uptime(),

        node: process.version,

        platform: process.platform,

        memory: process.memoryUsage()

    });

}