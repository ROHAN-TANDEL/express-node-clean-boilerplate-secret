import { Pool } from "pg";

export function createDatabase() {
    return new Pool({
        //todo configs details
        host: "127.0.0.1",
        port: 5432,
        user: "root",
        password: "root123",
        database: "postgres"

    });
}


export async function disconnectDatabase(

    database: Pool

): Promise<void> {

    await database.end();

}