import type { LevelWithSilent } from "pino";

export interface AppConfig {

    app: string;

    port: number;

    logger: {

        level: LevelWithSilent;

    };

}