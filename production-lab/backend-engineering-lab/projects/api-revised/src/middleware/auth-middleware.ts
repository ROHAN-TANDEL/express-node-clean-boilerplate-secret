import express, {NextFunction, Request, Response} from "express";
import {AppError} from "../errors";
import {auth} from "../auth";

export function authMiddleware(authPro : any) {

    const authProvider = authPro();

    return async function (

        req: Request,

        res: Response,

        next: NextFunction

    ) {
        const authorization = req.headers.authorization;

        if (!authorization) { throw new AppError( 401, "Authentication required" ); }

        const [ type, token ] = authorization.split(" ");

        if ( type !== "Bearer" ) { throw new AppError( 401, "Invalid authentication header" ); }

        console.log(authProvider);
        req.user = await authProvider.verifyToken(token);

        next();

    };

}