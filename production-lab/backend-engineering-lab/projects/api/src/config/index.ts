// use-cases: Imports validated environment values; why: config derives from trusted input; without: config cannot initialize; rules: consume parsed values instead of raw process variables.
import { env } from "./env.js";

// use-cases: Imports the config contract; why: the exported object must match its public shape; without: accidental shape changes are unchecked; rules: use a type-only import.
import type { AppConfig } from "./types.js";

// use-cases: Imports log-level policy; why: logger defaults depend on environment; without: the level is duplicated or missing; rules: centralize default selection in a pure helper.
import { getDefaultLogLevel } from "./defaults.js";

// use-cases: Exports immutable application configuration; why: all services need one trusted settings object; without: configuration is scattered; rules: type as `Readonly<AppConfig>` and freeze runtime values.
export const config: Readonly<AppConfig> = Object.freeze({

// use-cases: Begins application-specific configuration; why: related settings need a namespace; without: flat config is harder to manage; rules: group application settings under `app`.
    app: {
// use-cases: Maps application name from environment; why: service identity is deployment-configurable; without: name is unavailable; rules: use the validated `APP_NAME` variable.
        name: env.APP_NAME,
// use-cases: Maps port from environment; why: binding must be deployment-configurable; without: server has no configured port; rules: use the schema-coerced numeric `PORT`.
        port: env.PORT,
// use-cases: Maps runtime environment; why: logging and behavior use it; without: mode is unavailable; rules: use the schema-enumerated `NODE_ENV`.
        environment: env.NODE_ENV
// use-cases: Closes application config; why: it completes the app settings object; without: syntax is invalid; rules: preserve concern-specific nesting.
    },

// use-cases: Supplies logger settings; why: logger construction needs a threshold; without: logging has no environment policy; rules: use the centralized default helper in a compact object.
    logger: { level: getDefaultLogLevel( env.NODE_ENV) }

// use-cases: Closes and freezes config creation; why: it finalizes the immutable value; without: config cannot be exported; rules: use `Object.freeze` to prevent runtime mutation.
});
