import pino from "pino";
import options from "./options";

const logger = pino(options);

export default logger;