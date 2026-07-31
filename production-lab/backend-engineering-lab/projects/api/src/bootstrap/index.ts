import { config } from "../config/index.js";
import { logger } from "../logger/index.js";

import { createApp } from "../app.js";

import { ApplicationContext } from "../context/application-context.js";

export function bootstrap() {

    const context: ApplicationContext = {

        config,

        logger

    };

    return createApp(context);

}