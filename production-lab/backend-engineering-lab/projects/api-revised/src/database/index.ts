import { Client } from "pg";

export const database = new Client({

    host: "127.0.0.1",

    port: 5432,

    user: "app_user",

    password: "app_pass",

    database: "postgres"

});
