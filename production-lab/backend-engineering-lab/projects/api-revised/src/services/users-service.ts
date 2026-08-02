import type { ApplicationContext } from "../context";

import { usersRepository as usersRepository } from "../repositories/users-repository";

import type { CreateUserInput } from "../validators/user";
import {BadRequestError} from "../errors/bad-request";


export function userService(context: ApplicationContext)
{
    const userRepo = usersRepository(context);

    async function getUsers(context: ApplicationContext)
    {
        return userRepo.findAllUsers();
    }

    async function getUserById(context: ApplicationContext, id: number)
    {
        return userRepo.findUserById(id);
    }

    async function createUser(context: ApplicationContext, input: CreateUserInput)
    {
        const userExists = await userRepo.findUserByEmail(input.email);

        if (userExists) { throw new BadRequestError("Email already exists"); }

        return usersRepository(context).createUser(input);

    }


    return {

        getUsers,

        getUserById,

        createUser
    }
}
