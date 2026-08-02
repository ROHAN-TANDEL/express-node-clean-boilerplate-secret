import type { ApplicationContext } from "../context";
import { rows, row } from "../database/query";
import type { User } from "../types/user";
import type { CreateUserInput } from "../validators/user";


export async function findAllUsers(
    context: ApplicationContext
) {

    return rows<User>(
        context,
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
    context: ApplicationContext,
    id: number
) {
    console.log("query working");
    return row(
        context,
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


export async function findUserByEmail(

    context: ApplicationContext,

    email: string

) {

    return row<User>(context,
        `
        SELECT
            user_id,
            firstname,
            email
        FROM users
        WHERE email = $1

    `, [email]);

}



export async function createUserRepository(

    context: ApplicationContext,

    input: CreateUserInput

) {

    return row<User>(context,
        `
        INSERT INTO users ( 
            username, firstname,
            email, password

        )

        VALUES ( $1, $2, $3, $4 )

        RETURNING user_id, firstname, email

    `, [

        input.email,

        input.firstname,

        input.email,

        input.email

    ]);

}







export function usersRepository(

    context: ApplicationContext

) {

    return {

        findAllUsers() {

            return findAllUsers(

                context

            );

        },

        findUserById(

            id: number

        ) {

            return findUserById(
                context,
                id
            );

        },

        findUserByEmail(

            email: string

        ) {

            return findUserByEmail(

                context,

                email

            );

        },

        createUser(
            input: CreateUserInput

        ) {

            return createUserRepository(

                context,

                input

            );

        }

    };

}