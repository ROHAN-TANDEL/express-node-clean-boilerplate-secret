import { Pool } from "pg";
import AppKernel from "../../app/kernel/kernel.js";

export class Database {

    constructor(private readonly context: any) {
    }

    connect()
    {
        console.info({infra_status: " DB connection started... "});

        return new Pool({
            host: this.context.env.PG_MASTER_HOST,
            port: this.context.env.PG_MASTER_PORT,
            user: this.context.env.PG_MASTER_USERNAME,
            password: this.context.env.PG_MASTER_PASSWORD,
            database: this.context.env.PG_MASTER_DATABASE
        });
    }

    async disconnect(pool?:any): Promise<void>
    {
        console.info({infra_status: " DB connection stopped... "});

        await pool.end();
    }

    async cleanUp(pool:any): Promise<void>
    {
        console.info({infra_status: " DB connection cleanup... "});

        await this.disconnect(pool);
    }
}