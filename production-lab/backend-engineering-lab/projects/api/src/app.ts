// use-cases: Imports Express; why: it creates the HTTP application; without: no server application can be built; rules: use the framework default export rather than a custom wrapper.
import express from "express";

// use-cases: Imports the application dependency contract; why: the app needs configured services; without: context cannot be typed; rules: import the type-bearing module with its ESM extension.
import { ApplicationContext } from "./context/application-context.js";

// use-cases: Imports the health feature factory; why: the health route must be mounted; without: no health endpoint exists; rules: use the module public entry point rather than internal files.
import { createHealthModule } from "./modules/health/index.js";

// use-cases: Declares the application factory; why: app setup is kept reusable; without: bootstrap would own route assembly; rules: use a named function export for explicit composition.
export function createApp(
// use-cases: Accepts shared runtime dependencies; why: feature factories may need them; without: dependencies would be global or inaccessible; rules: pass a typed context instead of individual untyped values.
    context: ApplicationContext
// use-cases: Closes the parameter list; why: it completes the factory signature; without: TypeScript cannot parse the function; rules: retain normal function syntax for a synchronous factory.
) {

// use-cases: Creates the Express instance; why: it owns middleware and routes; without: no HTTP request pipeline exists; rules: create one app per bootstrap rather than use a singleton.
    const app = express();

// use-cases: Registers JSON body parsing; why: JSON request bodies must be decoded; without: handlers receive no parsed JSON body; rules: use Express's built-in parser rather than a separate body-parser dependency.
    app.use(express.json());

// use-cases: Begins mounting route middleware; why: the feature router needs a URL prefix; without: the module cannot receive requests; rules: use app-level middleware registration for feature routing.
    app.use(
// use-cases: Supplies the health endpoint prefix; why: it namespaces the feature; without: health routes would mount at the root; rules: use a stable, conventional health path.
        "/health",
// use-cases: Creates the health router with context; why: module dependencies are wired during setup; without: the health router cannot be mounted; rules: delegate construction to the module factory.
        createHealthModule(context)
// use-cases: Closes the middleware call; why: it finalizes route registration; without: the program is syntactically incomplete; rules: preserve Express's ordered middleware API.
    );

// use-cases: Returns the configured app; why: bootstrap must start it; without: the caller has no HTTP application; rules: return the app rather than listening within this composition layer.
    return app;

// use-cases: Closes the factory; why: it scopes app setup; without: syntax is invalid; rules: keep construction logic encapsulated in one function.
}
