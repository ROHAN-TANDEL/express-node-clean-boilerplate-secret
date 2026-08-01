import { config } from "../config";
import { Logger } from "pino";

export interface ApplicationContext {

    config: typeof config;

    logger: Logger;

}