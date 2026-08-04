import {AppError} from "../../errors";
import {usersRepository} from "../../repositories/users-repository";

export function authService(

    authProvider: ReturnType<any>,
    userRepo: ReturnType<typeof usersRepository>,

) {

    async function login(email: string, password: string)
    {
        /** Validate user if exists or not */
        const user: any = await userRepo.findUserByEmail(email);

        if (!user) { throw new AppError(401, "Invalid email or password"); }

        /** Validate password is valid or not */
        const hashedPassword = await authProvider.hashPassword(user?.password);

        const isValid = await authProvider.verifyPassword(password, hashedPassword);

        if (!isValid) { throw new AppError( 401, "Invalid email or password" ); }

        /** generate JWT token */
        const token = await authProvider.generateToken({
            id: user?.user_id,
            email: user?.email,
            role: user?.role
        });

        return { token };
    }

    return {
        login,
    };

}