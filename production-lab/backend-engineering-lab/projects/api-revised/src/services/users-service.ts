import type { ApplicationContext } from "../context";
import {findAllUsers} from "../repositories/users-repository";
export async function getUsers(
    context: ApplicationContext
) {

    return findAllUsers(
        context
    );

}