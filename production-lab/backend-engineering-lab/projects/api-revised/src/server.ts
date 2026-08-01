//new express
import express from "express";
import dotenv from "dotenv";
import pino from "pino";
import logger from "./logger";

dotenv.config();

const app = express();


const config = {

    port: Number(

        process.env.PORT ?? 3000

    )

};

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