import "./env.js";

import type {
    AppConfig,
    Environment
} from "./types.js";

import type { LevelWithSilent } from "pino";

const environment: Environment =
    (process.env.NODE_ENV as Environment | undefined) ??
    "development";

const loggerLevel: LevelWithSilent =
    environment === "production"
        ? "info"
        : "debug";

export const config: Readonly<AppConfig> = Object.freeze({

    app: {

        name: process.env.APP_NAME ?? "Backend Engineering Lab",

        port: Number(process.env.PORT ?? 3000),

        environment

    },

    logger: {

        level: loggerLevel

    }

});