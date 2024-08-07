import { Book } from '@/types/book.type';
import { useClerk } from '@clerk/nextjs';
import axios from 'axios';
import { useState, useLayoutEffect } from 'react';

export function useBookData(bookId: string) {

    const [ bookData, setBookData ] = useState<Book | null>(null);
    const clerk = useClerk();

    useLayoutEffect(() => {

        async function getBookData(): Promise<Book | null> {
            const token = await clerk.session?.getToken();
            const { data, status } = await axios.get<Book>(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${bookId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (status === 200) setBookData(data)

            return data;
        }

        getBookData();

    }, [bookId, clerk]);

    return bookData;
}