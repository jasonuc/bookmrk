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
import axios from "axios";

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
        <div className="w-full p-1 md:p-5 mt-5">
            <Card className="block mx-auto max-w-6xl">
                <CardHeader>
                    <CardTitle>{"All Books 📚"}</CardTitle>
                    <CardDescription className="text-muted-foreground">List of all books you have <span className="font-semibold">bookmrked</span></CardDescription>
                </CardHeader>
                <CardContent>
                    <BooksDataTable columns={booksColumns} data={booksData} />
                </CardContent>
            </Card>
        </div>
    )
}