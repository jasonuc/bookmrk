import { Book } from "./book.type";

export type Note = {
    id: string;
    content: string;
    bookId: string;
    createdAt: Date;
    book: Book;
}