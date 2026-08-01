import { env } from "./env";

const config = {

    port: Number( env.PORT ?? 3000),
    logger: {
        level: env.NODE_ENV === "development" ? "debug" : "info",
    }

};

export default config;