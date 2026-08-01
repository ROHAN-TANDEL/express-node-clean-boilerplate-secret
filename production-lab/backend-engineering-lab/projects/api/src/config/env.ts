import dotenv from "dotenv";

import { environmentSchema } from "./schema.js";
import { InvalidEnvironmentError } from "../errors/index.js";

dotenv.config();

const result = environmentSchema.safeParse(process.env);

if (!result.success) {

    const message = result.error.issues
        .map(issue => `${issue.path.join(".")}: ${issue.message}`)
        .join("\n");

    throw new InvalidEnvironmentError(message);

}

export const env = result.data;