import express from "express";
import {createLogger} from "../logger";
import config from "../config";
import { createApp } from "../app";

export function bootstrap() {

    const logger = createLogger(config);

    const app = createApp(logger);

    return {app, config, logger};
}
