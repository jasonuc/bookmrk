import { BookOpen, Eye, FolderOpen, MoreHorizontal, Pen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Book } from "@/types/book.type";

export default function ActionButton({ book }: { book: Book }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>

                <DropdownMenuItem className="space-x-2">
                    <FolderOpen className="w-4 h-4" />
                    <p>Open</p>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="space-x-2">
                    <Eye className="w-4 h-4" />
                    <p>View notes</p>
                </DropdownMenuItem>

                <DropdownMenuItem className="space-x-2">
                    <Pen className="w-4 h-4" />
                    <p>Write note</p>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <p>Edit book details</p>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="space-x-2 !text-red-700">
                    <Trash2 className="w-4 h-4" />
                    <p>Delete book</p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}