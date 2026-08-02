import express from "express";
import {createLogger} from "../logger";
import config from "../config";

import { createApp } from "../app";
import {ApplicationContext, createContext} from "../context";

import {createDatabase} from "../database";
import {checkDatabaseHealth} from "../database/health";


export async function bootstrap() {

    const logger = createLogger(config);
    let database;
    try {

        database = createDatabase();
        await database.connect();
        await checkDatabaseHealth();
    }

    catch (error) {

        logger.fatal(error);

        throw error;

    }

    const context: ApplicationContext = createContext(

        logger,

        config,

        database

    );

    const app = createApp(context);

    return {app, context};


}
