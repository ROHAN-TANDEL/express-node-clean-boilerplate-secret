import { Express } from "express";
import {ApplicationContext} from "../context";
import {getDatabaseTime} from "../services/time-service";

export function registerTime(

    app: Express,
    context: ApplicationContext,

) {

    app.get(

        "/time",

        async (req, res) => {

            const result = await getDatabaseTime(context);

            res.json(result);

        }

    );

}