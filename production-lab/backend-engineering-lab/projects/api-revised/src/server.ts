//new express
import express from "express";
import dotenv from "dotenv";
import { createLogger } from "./logger";
// import config from "./config";
import {bootstrap} from "./bootstrap";

// const logger = createLogger(config);


// await needs to be inside async

async function start(): Promise<void> {

    try {

        const {

            app,

            config,

            logger

        } = await bootstrap();

        const server = app.listen(config.port, () => {

            logger.info("Server Started");

        });


        process.on(

            "SIGINT",

            () => {

                // server.close is needed as It stops accepting new requests.
                // It waits for active requests to finish.
                // Then it calls the callback.
                server.close(

                    () => {

                        logger.info(

                            "HTTP Server Closed"

                        );

                    }

                );

            }

        );

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