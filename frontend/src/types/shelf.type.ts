import { Book } from "./book.type";

export type Shelf = {
    id: string;
    name: string;
    description: string;
    userId: string;
    book: Book[]
    colour: string;
}