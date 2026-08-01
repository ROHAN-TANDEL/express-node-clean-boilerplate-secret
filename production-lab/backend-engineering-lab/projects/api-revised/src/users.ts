import type { Express } from "express";

export function registerUsers(app: Express) {

    app.get("/users", (req, res) => {

        res.json([]);

    });

}