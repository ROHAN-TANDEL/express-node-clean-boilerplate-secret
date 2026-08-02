//new express
import express from "express";
import dotenv from "dotenv";
import { createLogger } from "./logger";
// import config from "./config";
import {bootstrap} from "./bootstrap";
import {disconnectDatabase} from "./database";
import {registerShutdown} from "./lifecycle/shutdown";

// const logger = createLogger(config);


// await needs to be inside async

async function start(): Promise<void> {

    try {

        const {app, context} = await bootstrap();

        const server = app.listen(context.config.port, () => {

            context.logger.info("Server Started");

        });


        registerShutdown(server, context);

    }

    catch (error) {

        console.error(error);

        process.exit(1);

    }

}

// start()returns a Promise.
// We're intentionally saying:
// "Start the application, and we are intentionally not awaiting the returned Promise here."
// It also keeps TypeScript and ESLint happy by making it explicit that the returned promise is intentionally ignored at the top level.
void start();