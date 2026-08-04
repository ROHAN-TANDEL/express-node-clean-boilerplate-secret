import type { ApplicationContext } from "../context";

import { usersRepository as usersRepository } from "../repositories/users-repository";

import type { CreateUserInput } from "../validators/user-validator";
import {BadRequestError} from "../errors/bad-request-error";
import {AppError} from "../errors";
import {NotFoundError} from "../errors/not-found-error";


export function userService(context: ApplicationContext, userRepo: ReturnType<typeof usersRepository>)
{

    async function getUsers()
    {
        const cachedUsers = await context.cache.get( "users" );

        if (cachedUsers) { return JSON.parse(cachedUsers);}

        const users = await userRepo.findAllUsers();

        await context.cache.set( "users", JSON.stringify(users) );

        return users;
    }

    async function getUserById(id: number)
    {
        const user = await userRepo.findUserById(id);
        if (!user || Object.keys(user).length === 0) {
            throw new NotFoundError("UserInterface not found!");
        }
        return user;
    }

    async function createUser(input: CreateUserInput)
    {
        const userExists = await userRepo.findUserByEmail(input.email);

        if (userExists) { throw new BadRequestError("Email already exists"); }

        await context.cache.del( "users" );

        return await userRepo.createUser(input);

    }


    return {

        getUsers,

        getUserById,

        createUser
    }
}
