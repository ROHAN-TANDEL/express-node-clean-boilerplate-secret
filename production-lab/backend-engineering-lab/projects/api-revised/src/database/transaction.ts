
import {ApplicationContext} from "../context";
import {PoolClient} from "pg";

export async function transaction(

    context: ApplicationContext,

    callback: (client: PoolClient) => Promise<void>

) {

    const client = await context.database.connect();

    try {

        await client.query("BEGIN");

        await callback(client);

        await client.query("COMMIT");

    } catch (error) {

        await client.query("ROLLBACK");

        throw error;

    } finally {

        client.release();

    }

}
