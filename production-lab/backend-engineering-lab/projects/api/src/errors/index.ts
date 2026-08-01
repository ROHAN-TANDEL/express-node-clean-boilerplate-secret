// use-cases: Re-exports the application error base class; why: consumers import errors from one boundary; without: callers must know internal file paths; rules: use barrel exports for the error module public API.
export * from "./application.error.js";

// use-cases: Re-exports the invalid-environment error; why: configuration can import it from the module boundary; without: internal paths leak to consumers; rules: expose each supported error explicitly through this barrel.
export * from "./invalid-environment.error.js";
