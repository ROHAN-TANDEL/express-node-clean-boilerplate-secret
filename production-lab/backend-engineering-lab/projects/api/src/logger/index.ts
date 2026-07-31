import pino from "pino";

import type { AppConfig } from "../config/types.js";

import { createLoggerOptions } from "./options.js";

export function createLogger(

    config: Readonly<AppConfig>

) {

    return pino(

        createLoggerOptions(config)

    );

}