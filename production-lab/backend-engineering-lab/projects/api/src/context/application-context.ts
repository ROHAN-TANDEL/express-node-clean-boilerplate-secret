// use-cases: Imports the configuration value for its inferred type; why: context exposes the exact config shape; without: config would need a duplicated type; rules: derive the type from the canonical value.
import { config } from "../config";
// use-cases: Imports Pino's logger type; why: context types the logging dependency; without: logger calls are unchecked; rules: depend on the library's declared interface.
import { Logger } from "pino";

// use-cases: Declares shared application dependencies; why: modules need a stable contract; without: dependencies are inconsistent; rules: model the context as an interface because it describes object shape.
export interface ApplicationContext {

// use-cases: Defines the configuration dependency; why: modules can read runtime settings; without: they cannot access validated config; rules: infer from `config` to keep types synchronized.
    config: typeof config;

// use-cases: Defines the logger dependency; why: modules can produce structured logs; without: logging is unavailable; rules: use Pino's `Logger` interface rather than `any`.
    logger: Logger;

// use-cases: Closes the context contract; why: it scopes dependency fields; without: syntax is invalid; rules: keep only cross-cutting runtime services here.
}
