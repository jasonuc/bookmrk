import { z } from "zod";

export const addShelfFormSchema = z.object({
    name: z.string().trim().min(1, { message: "Required" }).max(60),
    description: z.string().trim().max(100).or(z.string().trim().optional())
});