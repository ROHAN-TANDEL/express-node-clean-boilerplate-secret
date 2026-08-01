// use-cases: Imports Pino logger creation; why: the application needs structured logging; without: no logger instance can be built; rules: use Pino as the selected logging implementation.
import pino from "pino";

// use-cases: Imports application config type; why: logger input must be typed; without: configuration errors are unchecked; rules: depend on the public AppConfig contract.
import type { AppConfig } from "../config/types.js";

// use-cases: Imports logger option policy; why: construction should not contain formatting decisions; without: policy is duplicated; rules: separate option derivation from instance creation.
import { createLoggerOptions } from "./options.js";

// use-cases: Exports logger construction; why: bootstrap initializes logging through one API; without: Pino setup is repeated; rules: expose a named factory with readonly config.
export function createLogger(
// use-cases: Receives immutable config; why: logger setup reads but never changes settings; without: contract permits mutation; rules: express non-mutating intent via `Readonly`.
    config: Readonly<AppConfig>
// use-cases: Closes parameter declaration; why: it completes factory syntax; without: code cannot parse; rules: rely on inferred Pino logger return type.
) {

// use-cases: Derives Pino options; why: environment controls output behavior; without: Pino receives no configured policy; rules: delegate to the dedicated options factory.
    const options = createLoggerOptions(config);

// use-cases: Creates and returns Pino logger; why: callers need a usable logger instance; without: no structured logging exists; rules: pass validated options directly to Pino.
    return pino(options);

// use-cases: Closes logger construction; why: it scopes instance creation; without: syntax is invalid; rules: keep the public module API small.
}
