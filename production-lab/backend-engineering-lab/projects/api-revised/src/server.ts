//new express
import express from "express";
import dotenv from "dotenv";
import { createLogger } from "./logger";
import config from "./config";


const app = express();
const logger = createLogger(config);

// new route
app.get("/health", (req, res) => {

    res.json({

        status: "healthy V3"

    });

});

// server started
app.listen(config.port, () => {

    logger.info({status:"Server Started pino comment"});

});