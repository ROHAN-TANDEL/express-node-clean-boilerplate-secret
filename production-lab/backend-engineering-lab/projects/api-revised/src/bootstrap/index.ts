import express from "express";
import {createLogger} from "../logger";
import config from "../config";

import { createApp } from "../app";
import {ApplicationContext, createContext} from "../context";

import {createDatabase} from "../database";
import {createCache} from "../cache";
import {jobs} from "../jobs";
import {workers} from "../workers";
import {asyncHandlerMiddleware} from "../middleware/async-handler-middleware";
//import {checkDatabaseHealth} from "../database/health";


export async function bootstrap() {

    const logger = createLogger(config);
    let database, cache, jobsProvider, workersProvider;

    try {

        workersProvider = workers();
        jobsProvider = jobs(workersProvider);

        cache = await createCache();
        database = createDatabase();
        await database.connect();
        //await checkDatabaseHealth();
    }

    catch (error) {

        logger.fatal(error);

        throw error;

    }

    const context: ApplicationContext = createContext(

        logger,

        config,

        database,

        cache,

        jobsProvider,

        workersProvider

    );

    const app = createApp(context);

    return {app, context};

}
