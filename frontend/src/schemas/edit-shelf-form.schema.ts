import { z } from "zod";

export const editShelfFormSchema = z.object({
    name: z.string().trim().min(1, { message: "Required" }).max(60),
    description: z.string().trim().max(100).or(z.string().trim().optional()),
    colour: z.string().regex(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/, { message: "Invalid hex color code", })
});