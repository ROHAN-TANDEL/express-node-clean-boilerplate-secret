import type { Express } from "express";
import { healthController } from "./health-controller";

export function registerHealth(

    app: Express,

    context: any

) {

    app.get("/health", healthController(context));

}