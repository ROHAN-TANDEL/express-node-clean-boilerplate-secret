import type { LoggerOptions } from "pino";

import type { AppConfig } from "../config/types.js";

export function createLoggerOptions(

    config: Readonly<AppConfig>

): LoggerOptions {

    return {

        level: config.logger.level,

        transport:

            config.app.environment === "production"

                ? undefined

                : {

                    target: "pino-pretty",

                    options: {

                        colorize: true,

                        translateTime: "HH:MM:ss",

                        ignore: "pid,hostname"

                    }

                }

    };

}