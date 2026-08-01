// use-cases: Imports Pino's accepted log levels; why: logger config must match Pino; without: invalid levels can be typed; rules: reuse library types instead of duplicating string unions.
import type { LevelWithSilent } from "pino";

// use-cases: Begins the environment union; why: config needs a closed set of deployment modes; without: arbitrary strings are accepted; rules: use literal union types for compile-time constraints.
export type Environment =
// use-cases: Adds development as an allowed environment; why: local runtime uses it; without: development config cannot type-check; rules: model each supported mode as a literal.
    | "development"
// use-cases: Adds test as an allowed environment; why: tests need specific defaults; without: test config cannot type-check; rules: use an explicit literal.
    | "test"
// use-cases: Adds staging as an allowed environment; why: pre-production needs distinct settings; without: staging config cannot type-check; rules: retain a separate deployment tier.
    | "staging"
// use-cases: Adds production as an allowed environment; why: deployed behavior depends on it; without: production config cannot type-check; rules: use the conventional literal.
    | "production";

// use-cases: Defines the whole application configuration contract; why: consumers share one typed settings shape; without: config access is inconsistent; rules: group related settings by concern in an interface.
export interface AppConfig {

// use-cases: Begins application-level settings; why: name, port, and environment are related; without: fields lack a namespace; rules: nest concern-specific settings rather than use flat keys.
    app: {

// use-cases: Types the application name; why: service identity is textual; without: name use is unchecked; rules: require a string.
        name: string;

// use-cases: Types the listening port; why: server binding requires a number; without: ports could be used incorrectly; rules: represent the validated port as a number.
        port: number;

// use-cases: Types deployment environment; why: conditional behavior needs known modes; without: environment branches are unchecked; rules: use the `Environment` union.
        environment: Environment;

// use-cases: Closes application settings; why: it completes this config group; without: interface syntax is invalid; rules: keep app properties together.
    };

// use-cases: Begins logger settings; why: logging is independently configurable; without: level has no namespace; rules: isolate logging concerns in their own object.
    logger: {

// use-cases: Types the logging threshold; why: Pino only accepts known levels; without: invalid logger configuration can compile; rules: use Pino's `LevelWithSilent` union.
        level: LevelWithSilent;

// use-cases: Closes logger settings; why: it completes that group; without: interface syntax is invalid; rules: keep logging configuration cohesive.
    };

// use-cases: Closes the configuration interface; why: it defines the complete contract; without: syntax is invalid; rules: let concrete config values implement this shape.
}
