import { config } from "../config";

import { createLogger } from "../logger";

import { createApp } from "../app.js";

import type { ApplicationContext } from "../context/application-context.js";

export function bootstrap() {

    const logger = createLogger(config);

    const context: ApplicationContext = {

        config,

        logger

    };

    const app = createApp(context);

    return {

        app,

        context

    };

}