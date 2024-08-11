import { z } from "zod";

export const addShelfFormSchema = z.object({
    title: z.string().trim().min(1, { message: "Required" }),
    description: z.string().trim().optional()
});