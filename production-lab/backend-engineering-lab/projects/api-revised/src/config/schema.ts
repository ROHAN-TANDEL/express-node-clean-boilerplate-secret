//validation lives here
import z from "zod";

export const environmentSchema =z.object({

    APP_NAME: z.string(),
    PORT: z.coerce.number(),
    NODE_ENV: z.enum([

        "development",

        "test",

        "staging",

        "production"

    ])

});
