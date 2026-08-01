import express from "express";
import { registerUsers } from "./users";
import { registerHealth } from "./health";
import {registerTime} from "./time";

export function createApp(context:any) {

    const app = express();

    app.use(express.json());

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

    registerUsers(app);

    return app;

}