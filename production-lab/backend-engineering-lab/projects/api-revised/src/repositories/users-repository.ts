import type { ApplicationContext } from "../context";
import { rows, row } from "../database/query";
import type { User } from "../types/user";
import type { CreateUserInput } from "../validators/user";


export function usersRepository(

    context: ApplicationContext

) {

    async function findAllUsers(context: ApplicationContext)
    {
        const query = `SELECT user_id, firstname, email FROM users ORDER BY user_id`;
        return rows<User>(context, query);

    }

    async function findUserById(context: ApplicationContext, id: number)
    {
        const query = ` SELECT user_id, firstname, email 
                        FROM users WHERE user_id = $1 ORDER BY user_id`;

        return row(context, query, [id]);

    }

    async function findUserByEmail(context: ApplicationContext, email: string)
    {
        const query = `SELECT user_id, firstname, email FROM users WHERE email = $1`;

        return row<User>(context, query, [email]);

    }


    async function createUser(context: ApplicationContext, input: CreateUserInput)
    {

        const query = `INSERT INTO users 
                        (username, firstname, email, password ) 
                        VALUES ( $1, $2, $3, $4 ) 
                        RETURNING user_id, firstname, email`;

        const inputs =[ input.email, input.firstname, input.email, input.email ];

        return row<User>(context, query, inputs);

    }
}