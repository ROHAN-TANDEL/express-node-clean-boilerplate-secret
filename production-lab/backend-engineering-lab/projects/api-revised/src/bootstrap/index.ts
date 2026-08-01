import express from "express";
import {createLogger} from "../logger";
import config from "../config";
import { createApp } from "../app";
import type { ApplicationContext } from "../context/context";

export function bootstrap() {

    const database = { connected: true };

    const logger = createLogger(config);

    const context: ApplicationContext = {

        logger,

        config,

        database

    };

    const app = createApp(context);

    return {app, config, logger};


}
