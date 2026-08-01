// use-cases: Imports dotenv loading; why: local environment files must populate process variables; without: `.env` values are unavailable; rules: use dotenv rather than manually parse the file.
import dotenv from "dotenv";

// use-cases: Imports environment validation rules; why: raw variables must be checked; without: invalid values reach configuration; rules: keep validation rules in a dedicated schema module.
import { environmentSchema } from "./schema.js";
// use-cases: Imports the domain validation error; why: invalid configuration needs a specific failure type; without: callers see a generic error; rules: raise an application error for an application constraint.
import { InvalidEnvironmentError } from "../errors";

// use-cases: Loads dotenv values into the process environment; why: validation should include local file settings; without: local `.env` configuration is skipped; rules: use dotenv's default loading behavior at startup.
dotenv.config();

// use-cases: Safely validates all process variables; why: startup must report invalid config without immediate Zod throwing; without: values remain raw and unvalidated; rules: use `safeParse` to format every validation issue.
const result = environmentSchema.safeParse(process.env);

// use-cases: Detects a failed validation; why: bad configuration must stop startup; without: invalid data may be used; rules: branch on Zod's discriminated `success` result.
if (!result.success) {

// use-cases: Begins a combined validation message; why: operators need all issue details; without: only opaque failure exists; rules: derive a single readable string from Zod issues.
    const message = result.error.issues
// use-cases: Converts each issue to field and reason; why: errors need actionable paths; without: issue objects are not user-friendly; rules: join nested paths with dots and include Zod's message.
        .map(issue => `${issue.path.join(".")}: ${issue.message}`)
// use-cases: Joins individual issues across lines; why: multiple invalid values remain readable; without: messages run together; rules: use newline separation for CLI error output.
        .join("\n");

// use-cases: Raises a configuration-specific fatal error; why: startup must not continue with invalid settings; without: invalid environment data proceeds; rules: use the specialized error rather than a generic `Error`.
    throw new InvalidEnvironmentError(message);

// use-cases: Closes validation-failure handling; why: it separates success export from failure; without: syntax is invalid; rules: fail fast before exposing config.
}

// use-cases: Exports validated environment data; why: configuration consumers need safe variables; without: no trusted environment is available; rules: export only the schema-parsed result rather than `process.env`.
export const env = result.data;
