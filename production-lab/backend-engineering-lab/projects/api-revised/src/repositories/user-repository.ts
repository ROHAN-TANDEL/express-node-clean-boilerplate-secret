import type { ApplicationContext } from "../context";

export async function findAllUsers(
    context: ApplicationContext
) {

    const result = await context.database.query(`
        SELECT
            id,
            name,
            email
        FROM users
        ORDER BY id
    `);

    return result.rows;

}