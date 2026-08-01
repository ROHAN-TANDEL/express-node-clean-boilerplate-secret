import dotenv from "dotenv";
import {environmentSchema} from "./schema";

dotenv.config();

const result = environmentSchema.safeParse(process.env);

if (!result.success) {

    throw new Error(result.error.message);

}

export const env = result.data;