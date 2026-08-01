import { createApp } from "../app.js";

import { config } from "../config";

import type { ApplicationContext } from "../context/application-context";

import { createLogger } from "../logger";

export async function bootstrap() {

    const logger = createLogger(config);

    const context: ApplicationContext = { config, logger };

    const app = createApp(context);

    return { app, context };

}