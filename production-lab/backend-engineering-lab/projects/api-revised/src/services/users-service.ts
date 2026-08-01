import type { ApplicationContext } from "../context";
import {findAllUsers, findUserById, createUserRepository } from "../repositories/users-repository";
import type { CreateUserInput } from "../validators/user";


export async function getUsers(
    context: ApplicationContext
) {

    return findAllUsers(
        context
    );

}


export async function getUserById(
    context: ApplicationContext,
    id: number
) {

    return findUserById(
        id
    );

}


export async function createUser(

    context: ApplicationContext,

    input: CreateUserInput

) {

    return createUserRepository(

        context,

        input

    );

}