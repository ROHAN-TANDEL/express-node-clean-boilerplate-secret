// use-cases: Imports frozen configuration; why: startup needs validated settings; without: services lack configuration; rules: consume the config public entry point.
import { config } from "../config";

// use-cases: Imports logger creation; why: startup initializes logging; without: the context has no logger; rules: use the logger module facade.
import { createLogger } from "../logger";

// use-cases: Imports the context type only; why: startup validates the object shape without runtime code; without: context typing is lost; rules: use `import type` for a compile-time-only dependency.
import type { ApplicationContext } from "../context/application-context";

// use-cases: Imports the app factory; why: bootstrap composes the HTTP app; without: there is no app to return; rules: keep app assembly separate from system initialization.
import { createApp } from "../app.js";

// use-cases: Exports asynchronous startup composition; why: the server entry point needs initialized dependencies; without: startup steps are duplicated; rules: use a named async factory to allow future asynchronous initialization.
export async function bootstrap() {

// use-cases: Creates the application logger; why: logging is a shared dependency; without: services cannot write structured logs; rules: configure Pino once from immutable config.
    const logger = createLogger(config);

// use-cases: Builds the typed dependency context; why: modules receive consistent services; without: dependencies must be passed ad hoc; rules: use one explicit context object.
    const context: ApplicationContext = { config, logger };

// use-cases: Constructs the Express application; why: routes and middleware must be assembled before listening; without: no HTTP app is available; rules: pass the context through the app factory.
    const app = createApp(context);

// use-cases: Returns startup products; why: the entry point needs both server app and services; without: shutdown logging cannot receive the logger; rules: return a named object rather than positional values.
    return { app, context };

// use-cases: Closes bootstrap; why: it bounds startup composition; without: syntax is invalid; rules: keep lifecycle creation centralized.
}
