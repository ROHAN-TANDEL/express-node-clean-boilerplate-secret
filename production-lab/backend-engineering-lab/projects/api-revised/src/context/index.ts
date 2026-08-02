import type {Logger} from "pino";
import type {Pool} from "pg";
import AppConfig  from "../config";

export interface ApplicationContext {

    logger: Logger;

    config: typeof AppConfig;

    database: Pool;

}


export function createContext(

    logger: Logger,

    config: typeof AppConfig,

    database: Pool

): ApplicationContext {

    return {

        logger,

        config,

        database

    };

}