//new express
import express from "express";
import dotenv from "dotenv";

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

    console.log("Server Started");

});