import type { Express } from "express";

export function registerHealth(

    app: Express,

    context: any

) {

    app.get("/health", (req, res) => {

        context.logger.info("Health endpoint called");

        res.json({

            status: "healthy",

            service: context.config.app.name

        });

    });

}