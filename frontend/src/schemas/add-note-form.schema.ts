import { z } from "zod";

export const addNoteDialogFormSchema = z.object({
    content: z.string().trim().min(3, { message: "Too short, Min length of 3 characters." }),
})