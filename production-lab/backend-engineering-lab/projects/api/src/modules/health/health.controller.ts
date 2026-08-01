// use-cases: Imports Express request and response types; why: handler parameters need framework types; without: request handling is untyped; rules: use type declarations supplied by Express.
import { Request, Response } from "express";

// use-cases: Imports health service logic; why: controller delegates the health check; without: handler cannot obtain health data; rules: keep business logic outside HTTP handling.
import { HealthService } from "./health.service.js";

// use-cases: Declares the health HTTP controller; why: it adapts service results to HTTP; without: routing lacks a request handler owner; rules: use a class for dependency injection and bound handler fields.
export class HealthController {

// use-cases: Begins controller dependency construction; why: the service must be available to handlers; without: `getHealth` cannot delegate; rules: use constructor injection for explicit dependencies.
    constructor(

// use-cases: Stores the health service as immutable private state; why: handlers need reliable access; without: service calls fail; rules: use `private readonly` to prevent external access and reassignment.
        private readonly service: HealthService

// use-cases: Closes the empty constructor body; why: TypeScript parameter properties perform assignment; without: syntax is invalid; rules: avoid redundant constructor code.
    ) {}

// use-cases: Declares a bound health handler; why: Express calls it without losing `this`; without: the service reference can be undefined; rules: use an arrow field instead of an unbound prototype method.
    getHealth = (_req: Request, res: Response) => {

// use-cases: Obtains the current health payload; why: response data belongs in the service; without: controller has no payload; rules: delegate rather than hard-code business output.
        const result = this.service.getHealth();

// use-cases: Sends successful JSON; why: health clients need a machine-readable response; without: the request remains unanswered; rules: use explicit `200` and Express JSON serialization.
        res.status(200).json(result);

// use-cases: Closes the handler; why: it scopes request processing; without: syntax is invalid; rules: keep handler minimal and transport-focused.
    };

// use-cases: Closes the controller class; why: it groups health handlers; without: syntax is invalid; rules: keep HTTP concerns in this layer.
}
