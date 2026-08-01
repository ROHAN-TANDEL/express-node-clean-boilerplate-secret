import type { ApplicationContext } from "../context";
import { rows } from "../database/query";

export async function findAllUsers(
    context: ApplicationContext
) {

    return rows(
        `
    SELECT
        user_id,
        firstname,
        email
    FROM users
    ORDER BY user_id
    `
    );

}