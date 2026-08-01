import { env } from "./env.js";

import type { AppConfig } from "./types.js";

import { getDefaultLogLevel } from "./defaults.js";

export const config: Readonly<AppConfig> = Object.freeze({

    app: {

        name: env.APP_NAME,

        port: env.PORT,

        environment: env.NODE_ENV

    },

    logger: {

        level: getDefaultLogLevel(

            env.NODE_ENV

        )

    }

});