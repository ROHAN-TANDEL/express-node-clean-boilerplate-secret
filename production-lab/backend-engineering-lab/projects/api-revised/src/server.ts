//new express
import express from "express";
import dotenv from "dotenv";
import pino from "pino";

dotenv.config();

const app = express();

const logger = pino();


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

    logger.info("Server Started pino comment");

});