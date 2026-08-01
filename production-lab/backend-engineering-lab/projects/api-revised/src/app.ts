import express from "express";

export function createApp(logger:any) {

    const app = express();

    app.use(express.json());

    app.get("/health", (req, res) => {

        logger.info("Health endpoint called");
        res.json({

            status: "healthy"

        });

    });

    return app;

}