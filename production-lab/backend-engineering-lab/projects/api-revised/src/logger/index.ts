import pino from "pino";
import { createLoggerOptions } from "./options";

export function createLogger(config : any) {

    const loggerOptions = createLoggerOptions(config);
    return pino(loggerOptions);
}