import express from "express";
import {createLogger} from "../logger";
import config from "../config";
import { createApp } from "../app";

export function bootstrap() {

    const app = createApp();

    const logger = createLogger(config);
    return {app, config, logger};
}
