import express from "express";
import { registerUsers } from "./routes/users";
import { registerHealth } from "./routes/health";
import {registerTime} from "./routes/time";
import {errorHandler} from "./middleware/error-handler";
import {requestId} from "./middleware/request-id";
import {createRequestLogger} from "./middleware/request-logger";

export function createApp(context:any) {

    const app = express();

    app.use(express.json());

    app.use(requestId);

    app.use(createRequestLogger(context));

    app.use(errorHandler);

    registerHealth(app, context);


    app.get("/version", (req, res) => {

        res.json({

            version: "1.0.0"

        });

    });


    app.get("/ping", (req, res) => {

        res.send({message:"pong"});

    });

    registerTime(app, context);

    registerUsers(app, context);

    return app;

}