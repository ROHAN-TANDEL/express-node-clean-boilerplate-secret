import os from "os";

import type { ApplicationContext } from "./context";

import {checkDatabaseHealth} from "./database/health";

export async function getHealth(

    context: ApplicationContext

) {

    const database = await checkDatabaseHealth();
    return {

        status: "healthy",

        database: database,

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