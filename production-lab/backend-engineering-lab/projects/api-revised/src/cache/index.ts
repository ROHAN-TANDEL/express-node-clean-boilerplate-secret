
import { createClient } from "redis";

export async function createCache() {

    const client = createClient({
        url: "redis://admin:adminpass@localhost:6379"
    });

    await client.connect();

    async function get(key: string)
    {
        return client.get(key);
    }

    async function set( key: string, value: string )
    {
        await client.set(key, value);
    }
    return { client, get, set };

    async function del( key: string )
    {
        return client.del( key );
    }

}