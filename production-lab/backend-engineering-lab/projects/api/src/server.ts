// use-cases: Imports startup composition; why: the process must build dependencies; without: no application starts; rules: depend on the bootstrap public module.
import { bootstrap } from "./bootstrap";
// use-cases: Imports graceful shutdown registration; why: running servers must handle termination; without: termination can drop requests; rules: isolate lifecycle concerns from startup.
import { registerShutdown } from "./lifecycle";

// use-cases: Declares the asynchronous process entry point; why: startup can await initialization; without: initialization logic is scattered; rules: contain top-level orchestration in one function.
async function start() {

// use-cases: Begins startup error handling; why: boot failures need a controlled outcome; without: rejected startup may be unclear; rules: handle errors at the process boundary.
    try {

// use-cases: Builds the app and dependency context; why: listening needs both; without: no configured app exists; rules: destructure named bootstrap results for clarity.
        const { app,  context } = await bootstrap();

// use-cases: Starts listening for HTTP connections; why: the app must accept requests; without: the API remains inactive; rules: let Express create the Node server.
        const server = app.listen(

// use-cases: Supplies the configured TCP port; why: deployment controls the port; without: Express uses no intended port; rules: source it from validated immutable configuration.
            context.config.app.port,

// use-cases: Registers the listen-success callback; why: startup is logged only after binding; without: logs could falsely claim readiness; rules: use Express's lifecycle callback.
            () => {

// use-cases: Emits structured startup information; why: operators need service metadata; without: troubleshooting is harder; rules: log an object instead of concatenated strings.
                context.logger.info({

// use-cases: Adds service name to the log object; why: identifies the producer; without: multi-service logs lack context; rules: use configured rather than hard-coded naming.
                    service: context.config.app.name,

// use-cases: Adds environment to the log object; why: distinguishes deployments; without: diagnostics lack environment context; rules: use validated config values.
                    environment: context.config.app.environment,

// use-cases: Adds bound port to the log object; why: confirms the endpoint location; without: operators must infer it; rules: record the actual configured port.
                    port: context.config.app.port

// use-cases: Closes log metadata and supplies its message; why: creates one readable event; without: the call is incomplete; rules: pair structured fields with a stable event label.
                }, "HTTP Server Started");

// use-cases: Closes the listen callback; why: it finishes post-bind work; without: syntax is invalid; rules: keep readiness logging local to startup.
            }

// use-cases: Closes the listen call; why: it assigns the created server; without: server cannot be used for shutdown; rules: preserve the native listen signature.
        );

// use-cases: Installs termination handlers; why: the server should drain cleanly; without: signal handling is absent; rules: register it after the server is available.
        registerShutdown(server, context.logger);

// use-cases: Closes normal startup handling; why: it separates success from failure; without: the catch cannot pair with the try; rules: use standard try/catch structure.
    }

// use-cases: Captures startup failures; why: failure must be reported and terminated; without: errors may become unhandled rejections; rules: catch unknown errors at the outer boundary.
    catch (error) {

// use-cases: Writes the failure to standard error; why: failures remain visible even before logger setup; without: boot errors may be silent; rules: use console only for pre-logger fatal errors.
        console.error(error);

// use-cases: Ends with a failure status; why: the process supervisor must detect startup failure; without: the process can appear healthy; rules: use conventional nonzero exit code `1`.
        process.exit(1);

// use-cases: Closes failure handling; why: it bounds fatal behavior; without: syntax is invalid; rules: keep exit logic at the entry point.
    }

// use-cases: Closes the entry function; why: it scopes application lifecycle orchestration; without: syntax is invalid; rules: avoid top-level startup side effects beyond invocation.
}

// use-cases: Invokes process startup; why: declaring `start` alone does nothing; without: the server never runs; rules: call the single entry function once.
start();
