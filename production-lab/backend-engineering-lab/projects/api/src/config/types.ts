import type { LevelWithSilent } from "pino";

export type Environment =
    | "development"
    | "test"
    | "staging"
    | "production";

export interface AppConfig {

    app: {

        name: string;

        port: number;

        environment: Environment;

    };

    logger: {

        level: LevelWithSilent;

    };

}