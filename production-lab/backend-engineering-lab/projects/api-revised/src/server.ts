//new express
import express from "express";

const app = express();

const PORT = 3000;

// new route
app.get("/health", (req, res) => {

    res.json({

        status: "healthy V1"

    });

});

// server started
app.listen(PORT, () => {

    console.log("Server Started");

});