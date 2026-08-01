import os from "os";

import type { ApplicationContext } from "./context/context";

export function getHealth(

    context: ApplicationContext

) {

    return {

        status: "healthy",

        database: "connected",

        service: context.config.app.name,

        uptime: process.uptime(),

        node: process.version,

        platform: process.platform,

        cpu: process.cpuUsage(),

        memory: process.memoryUsage(),

        totalMemory: os.totalmem(),

        freeMemory: os.freemem(),

        hostname: os.hostname()

    };

}