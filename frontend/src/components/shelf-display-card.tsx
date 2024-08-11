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

interface ShelfDisplayCardProps extends Shelf {}

export default async function ShelfDisplayCard({ id, name, description, userId, book: books }: ShelfDisplayCardProps) {

    return (
        <Card className="p-2 md:px-3 md:py-10 overflow-hidden">
            <CardHeader className="whitespace-nowrap">
                <CardTitle className="overflow-hidden overflow-ellipsis">{name}</CardTitle>
                <CardDescription className="italic">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                { books.length ? 
                `This shelf has ${books.length} books` 
                : `This is bookshelf is empty. Go fill it up!` }
            </CardContent>
            <CardFooter className="flex items-center justify-end">
                <Button size="sm" variant="secondary">
                    <Trash2 className="size-4" />
                    <span className="ml-2">Delete Shelf</span>
                </Button>
            </CardFooter>
        </Card>
    )
}