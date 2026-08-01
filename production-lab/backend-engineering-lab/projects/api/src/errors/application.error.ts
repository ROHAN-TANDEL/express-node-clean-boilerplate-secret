// use-cases: Declares a common abstract application error; why: domain errors share native Error behavior; without: custom errors repeat setup; rules: extend `Error` and keep the base abstract to prevent generic instances.
export abstract class ApplicationError extends Error {

// use-cases: Accepts the error message; why: every error needs human-readable detail; without: error content is missing; rules: use a required string instead of optional untyped details.
    constructor(message: string) {

// use-cases: Initializes the native Error message; why: stack and message behavior come from Error; without: this is not a correctly initialized error; rules: call `super` before accessing `this` in a derived class.
        super(message);

// use-cases: Assigns the concrete subclass name; why: logs and error handling identify the exact error; without: name may remain `Error`; rules: derive from `new.target` rather than hard-code each subclass.
        this.name = new.target.name;

// use-cases: Restores the subclass prototype chain; why: `instanceof` works correctly after Error extension; without: runtime type checks may fail; rules: set the prototype to the concrete target prototype.
        Object.setPrototypeOf(this, new.target.prototype);

// use-cases: Closes error construction; why: it scopes native-error setup; without: syntax is invalid; rules: centralize shared custom-error mechanics here.
    }

// use-cases: Closes the base error class; why: it groups shared behavior; without: syntax is invalid; rules: subclasses provide application-specific semantics.
}
