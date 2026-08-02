import { Pool } from "pg";

export const database = new Pool({
    //todo configs details
    host: "127.0.0.1",
    port: 5432,
    user: "root",
    password: "root123",
    database: "postgres"

});


export async function disconnectDatabase() {

    await database.end();

}