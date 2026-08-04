import { QueryResult } from "pg";
import {ApplicationContext} from "../context";

export async function query(
    context: ApplicationContext,
    sql: string,
    values: unknown[] = []
): Promise<QueryResult> {

    return context.database.query(
        sql,
        values
    );

}


export async function rows<T>(

    context: ApplicationContext,

    sql: string,

    values: unknown[] = []

): Promise<T[]> {

    const result = await query(
        context,

        sql,

        values

    );

    return result.rows as T[];

}



export async function row<T>(
    context: ApplicationContext,

    sql: string,

    values: unknown[] = []

): Promise<T | T[] | undefined> {

    const result = await rows<T>(

        context,

        sql,

        values

    );


    return result[0] ?? result;

}