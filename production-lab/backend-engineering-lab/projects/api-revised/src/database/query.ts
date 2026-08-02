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



export async function row<T>(

    sql: string,

    values: unknown[] = []

): Promise<T | T[] | undefined> {

    const result = await rows<T>(

        sql,

        values

    );

    return result[0] ?? result;

}