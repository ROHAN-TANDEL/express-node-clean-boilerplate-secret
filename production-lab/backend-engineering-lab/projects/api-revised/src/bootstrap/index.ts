import express from "express";
import {createLogger} from "../logger";
import config from "../config";

import { createApp } from "../app";
import type { ApplicationContext } from "../context";

import { database } from "../database";
import {checkDatabaseHealth} from "../database/health";


export async function bootstrap() {

    const logger = createLogger(config);

    try {

        await database.connect();
        await checkDatabaseHealth();
    }

    catch (error) {

        logger.fatal(error);

        throw error;

    }

    const context: ApplicationContext = {

        logger,

        config,

        database

    };

    const app = createApp(context);

    return {app, config, logger};


}
