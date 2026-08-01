import { ApplicationError } from "./application.error.js";

export class InvalidEnvironmentError extends ApplicationError {

    constructor(message: string) {

        super(message);

    }

}