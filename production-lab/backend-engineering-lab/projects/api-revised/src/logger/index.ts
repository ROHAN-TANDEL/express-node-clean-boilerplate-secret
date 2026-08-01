import pino from "pino";
import loggerOptions from "./options";

const logger = pino(loggerOptions);

export default logger;