import type { Express } from "express";
import { healthController } from "../controllers/health-controller";
import type { ApplicationContext } from "../context";

export function registerHealth(

    app: Express,

    context: ApplicationContext

) {

    app.get("/health", healthController(context));

}