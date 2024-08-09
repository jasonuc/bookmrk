import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { auth } from "@clerk/nextjs/server";
import BooksDataTable from "./books-data-table/books-data-table";
import { Book } from "@/types/book.type";
import { booksColumns } from "./books-data-table/columns";
import axios from "axios";
import { Button } from "./ui/button";
import Link from "next/link";

async function getBooksData(): Promise<Book[]> {
    const { getToken } = auth();
    const token = await getToken();

    const { data: booksData } = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return booksData;
}

export default async function Dashboard() {

    const booksData = await getBooksData();

    return (
        <>
            <div className="mx-auto flex gap-x-3.5 items-center justify-end mb-3 max-w-6xl">
                {/* TODO: implement add book shelf functionality */}
                <Link href={'#'}>
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        {"Add Book Shelf 📦"}
                    </Button>
                </Link>

                {/* TODO: implement add functionality to remove book shelf */}
                <Link href={'#'}>
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        {"Delete Book Shelf 🗑️"}
                    </Button>
                </Link>
            </div>

            <Card className="block mx-auto max-w-6xl">
                <CardHeader>
                    <CardTitle>{"All Books 📚"}</CardTitle>
                    <CardDescription className="text-muted-foreground">List of all books you have <span className="font-semibold">bookmrked</span></CardDescription>
                </CardHeader>
                <CardContent>
                    <BooksDataTable columns={booksColumns} data={booksData} />
                </CardContent>
            </Card>
        </>
    )
}