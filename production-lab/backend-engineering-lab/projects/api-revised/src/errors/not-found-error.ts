import { AppError } from "./index";

export class NotFoundError extends AppError {

    constructor(

        message: string

    ) {

        super(

            404,

            message

        );

    }

}