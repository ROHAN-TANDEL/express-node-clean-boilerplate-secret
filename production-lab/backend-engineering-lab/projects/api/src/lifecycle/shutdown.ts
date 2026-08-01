// use-cases: Imports the Node HTTP server type; why: shutdown must close the running server; without: server parameter is untyped; rules: use Node's built-in HTTP declaration.
import type { Server } from "node:http";

// use-cases: Imports the Pino logger type; why: shutdown records lifecycle events; without: logger usage is unchecked; rules: depend on Pino's public logger interface.
import type { Logger } from "pino";

// use-cases: Exports signal-handler registration; why: server termination needs one reusable setup point; without: shutdown behavior is absent or duplicated; rules: register listeners after a server and logger are available.
export function registerShutdown(

// use-cases: Receives the active HTTP server; why: graceful shutdown must stop new connections; without: there is nothing to close; rules: accept the concrete Node `Server` interface.
    server: Server,

// use-cases: Receives structured logger; why: lifecycle events must be observable; without: shutdown is not logged; rules: inject the shared logger instead of using globals.
    logger: Logger

// use-cases: Declares no return value; why: handler registration is side-effect-only; without: API intent is unclear; rules: explicitly use `void` for setup functions.
): void {

// use-cases: Defines shutdown work for a received signal; why: both supported signals share behavior; without: logic is duplicated; rules: retain an async-compatible function for future cleanup steps.
    async function shutdown(signal: string): Promise<void> {

// use-cases: Logs the received signal; why: operators can trace termination reason; without: shutdown cause is unknown; rules: include signal as structured metadata.
        logger.info({ signal }, "Shutdown signal received");

// use-cases: Stops accepting HTTP connections; why: in-flight requests can finish gracefully; without: process exits while serving; rules: use Node server's `close` callback before exiting.
        server.close(() => {

// use-cases: Logs completed HTTP closure; why: graceful shutdown progress is observable; without: no confirmation is recorded; rules: emit a concise lifecycle message.
            logger.info("HTTP Server Closed");

// use-cases: Exits successfully after closure; why: the process should end after cleanup; without: event loop may linger; rules: use status `0` for intentional graceful termination.
            process.exit(0);

// use-cases: Closes the server-close callback; why: it bounds post-close work; without: syntax is invalid; rules: exit only after closure completes.
        });

// use-cases: Closes shared shutdown work; why: it scopes signal cleanup; without: syntax is invalid; rules: keep cleanup logic centralized.
    }

// use-cases: Registers interrupt handling; why: Ctrl+C should trigger graceful closure; without: interactive termination is abrupt; rules: subscribe to the standard `SIGINT` signal.
    process.on("SIGINT", () => {

// use-cases: Starts SIGINT shutdown without awaiting in the listener; why: EventEmitter ignores promise returns; without: async invocation is ambiguous; rules: use `void` to intentionally discard the promise.
        void shutdown("SIGINT");

// use-cases: Closes SIGINT listener; why: it completes listener registration; without: syntax is invalid; rules: reuse shared shutdown logic.
    });

// use-cases: Registers termination handling; why: orchestrators commonly send SIGTERM; without: deployments stop abruptly; rules: subscribe to the standard `SIGTERM` signal.
    process.on("SIGTERM", () => {

// use-cases: Starts SIGTERM shutdown without awaiting in the listener; why: EventEmitter ignores promise returns; without: async invocation is ambiguous; rules: use `void` to intentionally discard the promise.
        void shutdown("SIGTERM");

// use-cases: Closes SIGTERM listener; why: it completes listener registration; without: syntax is invalid; rules: reuse shared shutdown logic.
    });

// use-cases: Closes shutdown registration; why: it scopes process listeners; without: syntax is invalid; rules: centralize lifecycle subscriptions.
}
