// use-cases: Imports the common application error; why: invalid environment is a domain error; without: custom error behavior is duplicated; rules: derive specialized errors from the shared base.
import { ApplicationError } from "./application.error.js";

// use-cases: Declares configuration-validation failure; why: callers distinguish invalid environment data; without: configuration fails with a generic error; rules: use a named subclass for actionable error categorization.
export class InvalidEnvironmentError extends ApplicationError {

// use-cases: Accepts validation details; why: the user needs to know which variables are wrong; without: failure is opaque; rules: preserve a string message compatible with the base error.
    constructor(message: string) {

// use-cases: Passes details to base error setup; why: message, name, and prototype must initialize; without: the error lacks shared behavior; rules: delegate common mechanics with `super`.
        super(message);

// use-cases: Closes specialized error construction; why: it completes initialization; without: syntax is invalid; rules: add no duplicate state when base behavior suffices.
    }

// use-cases: Closes the invalid-environment error; why: it scopes the specialized type; without: syntax is invalid; rules: use it only for environment validation failures.
}
