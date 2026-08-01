import { Express } from "express";
import {ApplicationContext} from "./context/context";
export function registerTime(

    app: Express,
    context: ApplicationContext,

) {

    app.get(

        "/time",

        async (req, res) => {

            const result = await context.database.query(

                "SELECT NOW()"
            );

            res.json(

                result.rows
            );

        }

    );

}