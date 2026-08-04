import type {Logger} from "pino";
import type {Pool} from "pg";
import type { AppConfig } from "../config/types";

export interface ApplicationContext {

    logger: Logger;

    config: AppConfig;

    database: Pool;

    cache: any,

    jobsProvider: any,

    workersProvider: any

}


export function createContext(

    logger: Logger,

    config: AppConfig,

    database: Pool,

    cache: any,

    jobsProvider: any,

    workersProvider: any

): ApplicationContext {

    return {

        logger,

        config,

        database,

        cache,

        jobsProvider,

        workersProvider

    };

}