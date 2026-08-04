import express from "express";
import { registerUsers } from "./routes/users-route";
//import { registerHealth } from "./routes/health-route";
import {registerTime} from "./routes/time-route";
import {errorHandlerMiddleware} from "./middleware/error-handler-middleware";
import {requestIdMiddleware} from "./middleware/request-id-middleware";
import {createRequestLogger} from "./middleware/request-logger-middleware";
import {registerAuth} from "./routes/auth-route";
import {authMiddleware} from "./middleware/auth-middleware";
import {asyncHandlerMiddleware} from "./middleware/async-handler-middleware";
import {jobs} from "./jobs";

export function createApp(context:any) {

    const app = express();

    /** Application middlewares  */
    app.use(express.json());
    app.use(requestIdMiddleware);
    app.use(createRequestLogger(context));
    // app.use(authMiddleware());

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
    registerAuth(app, context);
    // registerHealth(app, context);
    registerTime(app, context);
    registerUsers(app, context);


    app.post("/jobs/test",
        asyncHandlerMiddleware(
            async function(req, res)
            {

                await context.jobsProvider.enqueue( "generate-report", { reportId: 1001 } );

                res.status(202).json({ message: "Job queued" });
            }
        )
    );


    /** Keep it at the bottom Global Error Handler */
    /** Generic Middleware for error handling Express feature */
    app.use(errorHandlerMiddleware);
    return app;

}