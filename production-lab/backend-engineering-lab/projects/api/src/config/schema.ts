// use-cases: Imports Zod validation; why: environment values need runtime validation; without: invalid strings reach the app; rules: use a schema library rather than hand-written checks.
import { z } from "zod";

// use-cases: Exports the environment validation schema; why: config loading needs a single source of rules; without: environment shape is unchecked; rules: model environment variables as a Zod object.
export const environmentSchema = z.object({

// use-cases: Requires the application name; why: logs and identity need it; without: name may be absent; rules: use a string because names are textual.
    APP_NAME: z.string(),

// use-cases: Coerces and validates the port; why: environment variables begin as strings; without: port may be unusable; rules: coerce to a positive integer rather than accept arbitrary text or decimals.
    PORT: z.coerce.number().int().positive(),

// use-cases: Begins the allowed Node environment field; why: behavior varies by deployment environment; without: unknown environments can slip through; rules: constrain values with an enum.
    NODE_ENV: z.enum([
// use-cases: Allows development mode; why: local development needs its own behavior; without: local startup validation fails; rules: enumerate known literal values rather than free-form strings.
        "development",
// use-cases: Allows test mode; why: tests need controlled behavior; without: test startup validation fails; rules: retain the standardized environment literal.
        "test",
// use-cases: Allows staging mode; why: pre-production deployments need identification; without: staging validation fails; rules: keep a distinct non-production environment.
        "staging",
// use-cases: Allows production mode; why: production logging behavior depends on it; without: production startup validation fails; rules: use the conventional `production` literal.
        "production"
// use-cases: Closes the allowed-environment list; why: it completes enum configuration; without: schema syntax is invalid; rules: keep the list explicit and finite.
    ])

// use-cases: Closes and exports the object schema; why: all variables form one validation unit; without: schema construction is incomplete; rules: validate the complete environment together.
});
