import type { ApplicationContext } from "../context";

import { usersRepository } from "../repositories/users-repository";

import type { CreateUserInput } from "../validators/user";
import {BadRequestError} from "../errors/bad-request";


export async function getUsers(
    context: ApplicationContext
) {

    return usersRepository.findAllUsers(
        context
    );

}


export async function getUserById(
    context: ApplicationContext,
    id: number
) {

    return usersRepository.findUserById(
        id
    );

}


export async function createUser(

    context: ApplicationContext,

    input: CreateUserInput

) {




    const existingUser = await usersRepository.findUserByEmail(

        context,

        input.email

    );

    if (existingUser) {

        throw new BadRequestError("Email already exists");

    }



    return usersRepository.createUser(

        context,

        input

    );

}