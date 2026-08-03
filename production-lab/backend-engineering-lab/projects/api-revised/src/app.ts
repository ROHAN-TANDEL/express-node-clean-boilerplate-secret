import express from "express";
import { registerUsers } from "./routes/users";
import { registerHealth } from "./routes/health";
import {registerTime} from "./routes/time";
import {errorHandler} from "./middleware/error-handler";
import {requestId} from "./middleware/request-id";
import {createRequestLogger} from "./middleware/request-logger";

export function createApp(context:any) {

    const app = express();

    /** Application middlewares  */
    app.use(express.json());
    app.use(requestId);
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
    app.use(errorHandler);
    return app;

}