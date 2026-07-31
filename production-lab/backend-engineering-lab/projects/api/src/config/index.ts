import dotenv from "dotenv";

dotenv.config();

export const config = Object.freeze({

    app: {

        name: process.env.APP_NAME ?? "API",

        port: Number(process.env.PORT ?? 3000),

        environment: process.env.NODE_ENV ?? "development"

    }

});