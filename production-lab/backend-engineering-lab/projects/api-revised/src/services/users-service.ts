import type { ApplicationContext } from "../context";

import { usersRepository as usersRepository } from "../repositories/users-repository";

import type { CreateUserInput } from "../validators/user";
import {BadRequestError} from "../errors/bad-request";


export async function getUsers(
    context: ApplicationContext
) {

    return usersRepository(context).findAllUsers();

}


export async function getUserById(
    context: ApplicationContext,
    id: number
) {

    return usersRepository(context).findUserById(
        id
    );

}


export async function createUser(

    context: ApplicationContext,

    input: CreateUserInput

) {




    const existingUser = await usersRepository(context).findUserByEmail(

        input.email

    );

    if (existingUser) {

        throw new BadRequestError("Email already exists");

    }



    return usersRepository(context).createUser(

        input

    );

}







export function createUsersService(
    context: ApplicationContext
) {

    return {

        async getUsers() {

            const repository = usersRepository(
                context
            );

            return repository.findAllUsers();

        },

        async getUserById(
            id: number
        ) {

            const repository = usersRepository(
                context
            );

            return repository.findUserById(
                id
            );

        },

        async createUser(
            input: CreateUserInput
        ) {

            const repository = usersRepository(
                context
            );

            return repository.createUser(
                input
            );

        }

    };

}