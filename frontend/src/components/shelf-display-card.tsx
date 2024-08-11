"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Shelf } from "@/types/shelf.type"
import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"
import axios, { AxiosError } from "axios"
import { auth } from "@clerk/nextjs/server"
import { useToast } from "./ui/use-toast";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface ShelfDisplayCardProps extends Shelf { }

export default function ShelfDisplayCard({ id, name, description, colour, userId: _userId, book: books }: ShelfDisplayCardProps) {

    const clerk = useClerk();
    const router = useRouter();
    const { toast } = useToast();

    const handleDeleteButtonClick = async (id: string) => {
        const token = await clerk.session?.getToken();
        try {
            const { data, status } = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/shelves/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (status === 200) {
                toast({
                    title: `Shelf has been deleted 🚮`,
                    description: `${name} has been deleted`
                })
            }

            router.refresh()

        } catch (err) {
            const { response: { data: { message } } } = err as any;

            toast({
                title: `🚫 There was an issue deleting this shelf`,
                description: `${name} has not been deleted. ${message}`
            })
        }
    }

    return (
        <Card className="p-2 md:px-3 overflow-hidden relative">
            <CardHeader className="whitespace-nowrap">
                <CardTitle className="overflow-hidden overflow-ellipsis">{name}</CardTitle>
                <CardDescription className="italic">{description}</CardDescription>
                <div style={{ backgroundColor: colour }} className="absolute border shadow-md size-3 rounded-full top-3 right-3" />
            </CardHeader>
            <CardContent>
                {books.length ?
                    `This shelf has ${books.length} books`
                    : `This is bookshelf is empty. Go fill it up!`}
            </CardContent>
            <CardFooter className="flex items-center justify-end">
                <Button size="sm" variant="secondary"
                    onClick={() => { handleDeleteButtonClick(id) }}>
                    <Trash2 className="size-4" />
                    <span className="ml-2">Delete Shelf</span>
                </Button>
            </CardFooter>
        </Card>
    )
}