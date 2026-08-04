import { z } from "zod";

export const createUserSchema = z.object({

    firstname: z.string().min(1),

    email: z.string().email()

});

export type CreateUserInput = z.infer<typeof createUserSchema>;