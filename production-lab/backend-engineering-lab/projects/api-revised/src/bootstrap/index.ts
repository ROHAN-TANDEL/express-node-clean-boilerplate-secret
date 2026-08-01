import express from "express";
import {createLogger} from "../logger";
import config from "../config";

export function bootstrap() {
    const app = express();
    const logger = createLogger(config);
    return {app, config, logger};
}
