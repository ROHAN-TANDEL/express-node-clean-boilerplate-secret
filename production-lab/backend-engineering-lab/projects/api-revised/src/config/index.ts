import { env } from "./env";
import type { AppConfig } from "./types";

const config: AppConfig = {

    port: Number( env.PORT ?? 3000),
    logger: {
        level: env.NODE_ENV === "development" ? "debug" : "info",
    },
    app: env.APP_NAME ?? "development",

};

export default config;