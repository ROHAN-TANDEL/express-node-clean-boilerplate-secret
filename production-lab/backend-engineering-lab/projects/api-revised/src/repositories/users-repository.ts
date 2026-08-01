import type { ApplicationContext } from "../context";

export async function findAllUsers(
    context: ApplicationContext
) {

    const result = await context.database.query(
        `
    SELECT
        user_id,
        firstname,
        email
    FROM users
    ORDER BY user_id
    `
    );

    return result.rows;

}