import { Router } from "express";

import { HealthController } from "./health.controller";

export function createHealthRoutes(

    controller: HealthController

) {

    const router = Router();

    router.get("/", controller.getHealth);

    return router;

}