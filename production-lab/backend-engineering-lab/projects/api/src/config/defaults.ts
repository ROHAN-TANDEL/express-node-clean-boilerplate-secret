import type { LevelWithSilent } from "pino";

import type { Environment } from "./types.js";

export function getDefaultLogLevel(
    environment: Environment
): LevelWithSilent {

    switch (environment) {

        case "production":
            return "info";

        case "development":
            return "debug";

        case "staging":
            return "info";

        case "test":
            return "silent";

    }

}