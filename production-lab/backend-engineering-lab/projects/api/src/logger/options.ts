// use-cases: Imports Pino option types; why: logger options need compile-time validation; without: option keys can be wrong; rules: use library-provided types.
import type { LoggerOptions } from "pino";

// use-cases: Imports application config type; why: options depend on validated settings; without: config access is unchecked; rules: use the public configuration contract.
import type { AppConfig } from "../config/types.js";

// use-cases: Exports logger-option construction; why: logger policy is kept separate from logger creation; without: options are duplicated; rules: use a pure function of immutable config.
export function createLoggerOptions(
// use-cases: Accepts readonly configuration; why: option construction must not mutate settings; without: config could be altered accidentally; rules: enforce immutability with `Readonly`.
    config: Readonly<AppConfig>
// use-cases: Declares Pino option output; why: callers pass the result safely to Pino; without: result compatibility is unchecked; rules: return Pino's `LoggerOptions` type.
): LoggerOptions {

// use-cases: Begins the Pino options object; why: logger creation needs configuration; without: no options are provided; rules: return a plain typed object.
    return {

// use-cases: Sets the logging threshold; why: environment policy controls emitted events; without: Pino uses an unintended default; rules: use configured level rather than a hard-coded value.
        level: config.logger.level,

// use-cases: Starts transport selection; why: development needs readable output while production favors default structured output; without: format is not environment-aware; rules: configure Pino transport conditionally.
        transport:

// use-cases: Detects production; why: production should not use the pretty printer; without: both modes receive the same transport; rules: compare the validated environment literal.
            config.app.environment === "production"

// use-cases: Leaves transport unset in production; why: Pino emits its standard structured stream; without: pretty output may be used in production; rules: use `undefined` instead of a custom production transport.
                ? undefined

// use-cases: Begins non-production pretty transport; why: local logs should be human-readable; without: developer output remains raw JSON; rules: choose `pino-pretty` only outside production.
                : {

// use-cases: Selects the pretty transport package; why: Pino needs the transport target; without: it cannot resolve formatting; rules: use the installed `pino-pretty` integration.
                    target: "pino-pretty",

// use-cases: Begins pretty-printer configuration; why: output presentation needs options; without: defaults are less helpful; rules: nest options under Pino's expected key.
                    options: {

// use-cases: Enables ANSI colors; why: developers scan levels faster; without: local logs are monochrome; rules: use color only in non-production pretty output.
                        colorize: true,

// use-cases: Chooses displayed timestamp format; why: readable time aids local debugging; without: timestamps are less convenient; rules: use concise hour-minute-second formatting.
                        translateTime: "HH:MM:ss",

// use-cases: Omits noisy process metadata; why: local logs focus on messages; without: each line includes less useful fields; rules: ignore only pid and hostname in the pretty view.
                        ignore: "pid,hostname"

// use-cases: Closes pretty options; why: it completes formatting configuration; without: syntax is invalid; rules: keep presentation options scoped to the transport.
                    }

// use-cases: Closes non-production transport; why: it completes ternary fallback; without: logger options are invalid; rules: avoid production-specific formatting in this branch.
                }

// use-cases: Closes Pino options; why: it completes the returned configuration; without: syntax is invalid; rules: expose only required logger settings.
    };

// use-cases: Closes option construction; why: it bounds policy logic; without: syntax is invalid; rules: keep logger configuration pure.
}
