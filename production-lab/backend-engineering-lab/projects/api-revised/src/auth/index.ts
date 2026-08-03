import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {registerUsers} from "../routes/users-route";

export function auth() {

    async function hashPassword(

        password: string

    )
    {

        return bcrypt.hash(

            password,

            10

        );

    }

    async function verifyPassword(

        password: string,

        hash: string

    )
    {

        return bcrypt.compare(

            password,

            hash

        );

    }


    async function generateToken(

        payload: object

    )
    {

        return jwt.sign(

            payload,

            "production-lab"

        );

    }

    async function verifyToken(

        token: string

    )
    {

        return jwt.verify(
            token,

            "production-lab"
        );
    }


    return {
        hashPassword,
        verifyPassword,
        generateToken,
        verifyToken
    }

}
