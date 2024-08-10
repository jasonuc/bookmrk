import { Book } from "@/types/book.type";
import axios from "axios";

export async function getBook(bookId: string, token: string) {
  
    const { data: book, status } = await axios.get<Book>(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${bookId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    });
    
    return {
        book, status
    };
}