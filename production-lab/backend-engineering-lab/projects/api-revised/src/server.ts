//new express
import express from "express";
import dotenv from "dotenv";
import logger from "./logger";
import config from "./config";


const app = express();

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