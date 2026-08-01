
import type { ApplicationContext } from "../context";

export async function getCurrentDatabaseTime(
    context: ApplicationContext
) {

    const result = await context.database.query(
        "SELECT NOW()"
    );

    return result.rows[0];

}

export async function getCurrentUser(
    context: ApplicationContext
) {

    const result = await context.database.query(
        "SELECT CURRENT_USER"
    );

    return result.rows[0];

}

export async function getDatabaseVersion(
    context: ApplicationContext
) {

    const result = await context.database.query(
        "SELECT version()"
    );

    return result.rows[0];

}