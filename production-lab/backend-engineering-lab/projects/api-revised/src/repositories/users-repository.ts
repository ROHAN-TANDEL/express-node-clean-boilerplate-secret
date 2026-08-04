import type { ApplicationContext } from "../context";
import { rows, row } from "../database/query";
import type { UserInterface } from "../types/user-interface";
import type { CreateUserInput } from "../validators/user-validator";
import {transaction} from "../database/transaction";


export function usersRepository(

    context: ApplicationContext

) {

    async function findAllUsers()
    {
        const query = `SELECT user_id, firstname, email FROM users ORDER BY user_id`;
        return rows<UserInterface>(context, query);

    }

    async function findUserById(id: number)
    {
        const query = ` SELECT user_id, firstname, email 
                        FROM users WHERE user_id = $1 ORDER BY user_id`;

        return row(context, query, [id]);

    }

    async function findUserByEmail(email: string)
    {
        const query = `SELECT user_id, firstname, email, password, role FROM users WHERE email = $1`;

        return row(context, query, [email]);

    }


    async function createUser(input: CreateUserInput, context? :any)
    {

        const query = `INSERT INTO users 
                        (username, firstname, email, password ) 
                        VALUES ( $1, $2, $3, $4 ) 
                        RETURNING user_id, firstname, email`;

        const inputs =[ input.email, input.firstname, input.email, input.email ];

        return row<UserInterface>(context, query, inputs);

    }


    async function createUserTransaction(input: CreateUserInput, context? : any)
    {
        await transaction(context, async (client) => {

            await createUser(input, client);
            await createUser(input, client);

        });
    }



    return {
        findAllUsers,
        findUserByEmail,
        findUserById,
        createUser
    }
}