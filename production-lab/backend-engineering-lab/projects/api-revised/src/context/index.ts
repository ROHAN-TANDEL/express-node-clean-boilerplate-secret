import type {Logger} from "pino";
import type {Pool} from "pg";
import type { AppConfig } from "../config/types";

export interface ApplicationContext {

    logger: Logger;

    config: AppConfig;

    database: Pool;

}


export function createContext(

    logger: Logger,

    config: AppConfig,

    database: Pool

): ApplicationContext {

    return {

        logger,

        config,

        database

    };

}