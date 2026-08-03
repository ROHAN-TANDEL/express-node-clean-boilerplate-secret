import express from "express";
import { registerUsers } from "./routes/users-route";
import { registerHealth } from "./routes/health-route";
import {registerTime} from "./routes/time-route";
import {errorHandlerMiddleware} from "./middleware/error-handler-middleware";
import {requestIdMiddleware} from "./middleware/request-id-middleware";
import {createRequestLogger} from "./middleware/request-logger-middleware";

export function createApp(context:any) {

    const app = express();

    /** Application middlewares  */
    app.use(express.json());
    app.use(requestIdMiddleware);
    app.use(createRequestLogger(context));


    /** todo: move the API into a common route file */
    app.get("/version", (req, res) => {

        res.json({

            version: "1.0.0"

        });

    });

    /** todo: move the API into a common route file */
    app.get("/ping", (req, res) => {

        res.send({message:"pong"});

    });

    /** Registered APIs */
    registerHealth(app, context);
    registerTime(app, context);
    registerUsers(app, context);


    /** Keep it at the bottom Global Error Handler */
    /** Generic Middleware for error handling Express feature */
    app.use(errorHandlerMiddleware);
    return app;

}