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