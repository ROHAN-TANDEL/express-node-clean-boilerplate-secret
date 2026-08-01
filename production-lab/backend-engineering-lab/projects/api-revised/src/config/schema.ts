//validation lives here
import z from "zod";

export const environmentSchema =z.object({

    PORT: z.coerce.number()

});
