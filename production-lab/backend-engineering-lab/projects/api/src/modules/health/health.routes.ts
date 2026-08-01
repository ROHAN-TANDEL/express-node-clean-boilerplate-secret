// use-cases: Imports Express router creation; why: this module exposes a sub-router; without: endpoints cannot be grouped; rules: use Express Router rather than a separate app.
import { Router } from "express";

// use-cases: Imports the health controller type; why: routes call controller handlers; without: the factory parameter is untyped; rules: keep routing dependent on controllers, not services.
import { HealthController } from "./health.controller";

// use-cases: Exports router construction; why: module assembly needs a configured router; without: endpoint registration is unavailable; rules: use a factory to receive dependencies explicitly.
export function createHealthRoutes(

// use-cases: Accepts the request handler owner; why: routes delegate HTTP behavior; without: the route lacks a handler; rules: inject a controller rather than create it here.
    controller: HealthController

// use-cases: Closes factory parameters; why: it completes the declaration; without: syntax is invalid; rules: retain a synchronous route factory.
) {

// use-cases: Creates an isolated router; why: health routes are mounted as a feature; without: route registration has no target; rules: prefer Router for modular routes.
    const router = Router();

// use-cases: Registers the health GET endpoint; why: clients query health with GET; without: `/health/` returns no feature response; rules: mount root relative to the app-provided `/health` prefix.
    router.get("/", controller.getHealth);

// use-cases: Returns the configured router; why: app composition must mount it; without: routes remain unreachable; rules: return the router rather than mutate global routing state.
    return router;

// use-cases: Closes router construction; why: it scopes feature routing; without: syntax is invalid; rules: keep registration local.
}
