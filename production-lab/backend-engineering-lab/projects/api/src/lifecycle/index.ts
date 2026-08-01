// use-cases: Re-exports shutdown registration; why: consumers use a stable lifecycle entry point; without: they must import an internal file; rules: use a barrel module for public lifecycle exports.
export * from "./shutdown.js";
