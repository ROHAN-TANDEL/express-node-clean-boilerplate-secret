import { config } from "../config";
import { logger } from "../logger";

export interface ApplicationContext {

    config: typeof config;

    logger: typeof logger;

}