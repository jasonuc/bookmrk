import { z } from "zod";
import { Status } from "@/types/book.type";

export const editBookFormSchema = z.object({
    title: z.string().trim().min(1, { message: "Required" }),
    rating: z.number().min(0).max(5).default(0),
    status: z.enum([Status.DNF, Status.FINISHED, Status.READING, Status.TBR]),
    shelfId: z.string()
});