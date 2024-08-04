import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

} from "@/components/ui/card"
import { auth } from "@clerk/nextjs/server";
import BooksDataTable from "./books-data-table/books-data-table";
import { Book } from "@/types/book.type";
import { booksColumns } from "./books-data-table/columns";

async function getBooksData(): Promise<Book[]> {
    const { getToken } = auth();
    const token = await getToken();
    
    const userBooksRes = await fetch(`http://localhost:8000/api/books`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const booksData: Book[] = await userBooksRes.json();

    return booksData
}

export default async function Dashboard() {

    const booksData = await getBooksData();

    return (
        <div className="w-full p-1 md:p-5 mt-10">
            <Card className="block mx-auto max-w-6xl">
                <CardHeader>
                    <CardTitle>All Books</CardTitle>
                    <CardDescription className="text-muted-foreground">List of all books you have saved</CardDescription>
                </CardHeader>
                <CardContent>
                    <BooksDataTable columns={booksColumns} data={booksData} />
                </CardContent>
            </Card>
        </div>
    )
}