import dotenv from "dotenv";

import { environmentSchema } from "./schema.js";

dotenv.config();

const result = environmentSchema.safeParse(process.env);

if (!result.success) {

    throw new Error(

        JSON.stringify(result.error.format(), null, 2)

    );

}

export const env = result.data;