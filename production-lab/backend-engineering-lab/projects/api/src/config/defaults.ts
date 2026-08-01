// use-cases: Imports valid Pino levels; why: defaults must be compatible with logger configuration; without: return values can be invalid; rules: use the dependency's type contract.
import type { LevelWithSilent } from "pino";

// use-cases: Imports the known environment type; why: defaults vary by allowed mode; without: unknown mode values are accepted; rules: constrain input to validated environments.
import type { Environment } from "./types.js";

// use-cases: Exports environment-based log-level selection; why: each deployment mode needs an appropriate default; without: all modes use an unsuitable level; rules: centralize the policy in a pure function.
export function getDefaultLogLevel(
// use-cases: Receives the validated environment; why: it chooses the branch; without: no default can be selected; rules: use a narrow union rather than a raw string.
    environment: Environment
// use-cases: Declares Pino-compatible return type; why: callers need safe logger options; without: return validation is weaker; rules: explicitly return `LevelWithSilent`.
): LevelWithSilent {

// use-cases: Begins environment policy branching; why: each mode maps to a level; without: policy is implicit; rules: use `switch` for exhaustive literal cases.
    switch (environment) {

// use-cases: Matches production; why: deployed services should log operational information; without: production falls through; rules: select `info` to balance observability and volume.
        case "production":
// use-cases: Returns production's threshold; why: normal production events should be retained; without: branch has no value; rules: choose `info` over verbose `debug` for production.
            return "info";

// use-cases: Matches development; why: local diagnosis benefits from detail; without: development falls through; rules: provide an explicit development policy.
        case "development":
// use-cases: Returns development's threshold; why: developers need diagnostic events; without: branch has no value; rules: choose `debug` instead of sparse `info` locally.
            return "debug";

// use-cases: Matches staging; why: staging should resemble production observability; without: staging falls through; rules: make staging an explicit policy.
        case "staging":
// use-cases: Returns staging's threshold; why: integration environments need normal operational logs; without: branch has no value; rules: choose production-like `info` volume.
            return "info";

// use-cases: Matches test; why: tests usually should not emit logs; without: test falls through; rules: make test behavior explicit.
        case "test":
// use-cases: Returns test's threshold; why: test output stays clean; without: branch has no value; rules: choose Pino's `silent` rather than filtering logs externally.
            return "silent";

// use-cases: Closes the policy branch; why: it completes the switch; without: syntax is invalid; rules: rely on the union for exhaustive handling.
    }

// use-cases: Closes default selection; why: it scopes environment policy; without: syntax is invalid; rules: keep configuration defaults side-effect-free.
}
