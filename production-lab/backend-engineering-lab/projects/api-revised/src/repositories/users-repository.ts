import type { ApplicationContext } from "../context";
import { rows, row } from "../database/query";
import type { User } from "../entities/user";

export async function findAllUsers(
    context: ApplicationContext
) {

    return rows<User>(
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


export async function findUserById(

    id: number

) {

    return row(
        `
    SELECT
        user_id,
        firstname,
        email
    FROM users
    WHERE user_id = $1
    ORDER BY user_id
    `, [id]
    );

}