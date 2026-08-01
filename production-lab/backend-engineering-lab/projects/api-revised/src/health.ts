import type { Express } from "express";
import { healthController } from "./health-controller";
import type { ApplicationContext } from "./context";

export function registerHealth(

    app: Express,

    context: ApplicationContext

) {

    app.get("/health", healthController(context));

}