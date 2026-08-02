import type { ApplicationContext } from "../context";

import { usersRepository as usersRepository } from "../repositories/users-repository";

import type { CreateUserInput } from "../validators/user";
import {BadRequestError} from "../errors/bad-request";


export function userService(userRepo: ReturnType<typeof usersRepository>)
{

    async function getUsers()
    {
        return userRepo.findAllUsers();
    }

    async function getUserById(id: number)
    {
        return userRepo.findUserById(id);
    }

    async function createUser(input: CreateUserInput)
    {
        const userExists = await userRepo.findUserByEmail(input.email);

        if (userExists) { throw new BadRequestError("Email already exists"); }

        return userRepo.createUser(input);

    }


    return {

        getUsers,

        getUserById,

        createUser
    }
}
