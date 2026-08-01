//new express
import express from "express";

const app = express();

// new route
app.get("/health", (req, res) => {

    res.json({

        status: "healthy"

    });

});

// server started
app.listen(3000, () => {

    console.log("Server Started");

});