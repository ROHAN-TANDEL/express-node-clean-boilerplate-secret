import express from "express";

import { ApplicationContext } from "./context/application-context.js";

import { createHealthModule } from "./modules/health/index.js";

export function createApp(

    context: ApplicationContext

) {

    const app = express();

    app.use(express.json());

    app.use(

        "/health",

        createHealthModule(context)

    );

    return app;

}