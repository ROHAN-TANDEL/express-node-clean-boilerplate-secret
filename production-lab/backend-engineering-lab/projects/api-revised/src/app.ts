import express from "express";

export function createApp(context:any) {

    const app = express();

    app.use(express.json());

    app.get("/health", (req, res) => {

        context.logger.info("Health endpoint called", context);
        res.json({

            status: "healthy",
            app: context.config.app
        });

    });

    return app;

}