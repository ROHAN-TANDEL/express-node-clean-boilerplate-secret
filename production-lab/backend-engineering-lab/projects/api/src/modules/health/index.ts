// use-cases: Imports the shared context type; why: module composition accepts standard dependencies; without: its parameter cannot be typed; rules: reference the application context contract.
import { ApplicationContext } from "../../context/application-context.js";

// use-cases: Imports health business logic; why: the controller delegates status creation; without: no service can be instantiated; rules: keep service construction inside the module boundary.
import { HealthService } from "./health.service.js";

// use-cases: Imports the HTTP controller; why: routes require request handlers; without: the router has no handler; rules: layer routes over a controller.
import { HealthController } from "./health.controller";

// use-cases: Imports router construction; why: the module returns an Express router; without: no routes can be exposed; rules: use the routes factory rather than constructing routes here.
import { createHealthRoutes } from "./health.routes.js";

// use-cases: Exports health feature assembly; why: app composition mounts the feature; without: the health module is inaccessible; rules: expose one module factory as the public API.
export function createHealthModule(

// use-cases: Accepts the shared context for module consistency; why: future health dependencies can use it; without: factory signature differs from other modules; rules: prefix unused parameters with `_` to communicate intentional nonuse.
    _context: ApplicationContext

// use-cases: Closes the parameter list; why: it completes the factory declaration; without: syntax is invalid; rules: retain a synchronous factory because construction is synchronous.
) {

// use-cases: Creates health service logic; why: controller needs a dependency; without: no health response can be produced; rules: instantiate the simple stateless service locally.
    const service = new HealthService();

// use-cases: Creates the HTTP controller; why: route handlers need service access; without: routes cannot serve health requests; rules: inject the service rather than create it inside the controller.
    const controller = new HealthController(service);

// use-cases: Returns configured health routes; why: the app mounts a router; without: module composition has no result; rules: expose routing only after all layers are wired.
    return createHealthRoutes(controller);

// use-cases: Closes module assembly; why: it bounds feature wiring; without: syntax is invalid; rules: keep feature internals encapsulated.
}
