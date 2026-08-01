import pino from "pino";
import { createLoggerOptions } from "./options";

export function createLogger() {

    const loggerOptions = createLoggerOptions();
    return pino(loggerOptions);

}