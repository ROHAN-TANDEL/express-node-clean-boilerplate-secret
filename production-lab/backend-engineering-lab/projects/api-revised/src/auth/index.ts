import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {registerUsers} from "../routes/users-route";

export function auth() {

    async function hashPassword(

        password: string

    ) {

        return bcrypt.hash(

            password,

            10

        );

    }

    async function verifyPassword(

        password: string,

        hash: string

    ) {

        return bcrypt.compare(

            password,

            hash

        );

    }

    return {
        hashPassword,
        verifyPassword
    }

}
