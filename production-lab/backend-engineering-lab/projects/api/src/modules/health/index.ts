import { ApplicationContext } from "../../context/application-context.js";

import { HealthService } from "./health.service.js";

import { HealthController } from "./health.controller";

import { createHealthRoutes } from "./health.routes.js";

export function createHealthModule(

    _context: ApplicationContext

) {

    const service = new HealthService();

    const controller = new HealthController(service);

    return createHealthRoutes(controller);

}