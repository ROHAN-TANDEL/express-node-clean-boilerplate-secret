import { QueryResult } from "pg";
import { database } from "./index";

export async function query(
    sql: string,
    values: unknown[] = []
): Promise<QueryResult> {

    return database.query(
        sql,
        values
    );

}


export async function rows<T>(

    sql: string,

    values: unknown[] = []

): Promise<T[]> {

    const result = await query(

        sql,

        values

    );

    return result.rows as T[];

}