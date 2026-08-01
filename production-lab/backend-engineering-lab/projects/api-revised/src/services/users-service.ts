import type { ApplicationContext } from "../context";
import {findAllUsers, findUserById } from "../repositories/users-repository";


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