"use client";
import { BookOpen, Eye, FolderOpen, MoreHorizontal, Pen, ShareIcon, Trash2 } from "lucide-react";
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
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useClerk } from "@clerk/nextjs";
import { NextApiResponse } from "next";
import { title } from "process";

export default function ActionButton({ book }: { book: Book }) {

    const router = useRouter();
    const { toast } = useToast()

    const clerk = useClerk();

    const handleDeleteBookButtonClick = async () => {
        const token = await clerk.session?.getToken();

        const { status } = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${book.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (status === 200) {
            toast({
                title: `🚮 ${book.title} has been deleted`,
            });
            router.refresh();
        }
    }

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

                <DropdownMenuItem className="space-x-2" onClick={
                    () => {
                        router.push(`/home/book/${book.id}`);
                    }
                }>
                    <FolderOpen className="w-4 h-4" />
                    <p>Open</p>
                </DropdownMenuItem>

                <DropdownMenuItem className="space-x-2" onClick={
                    async () => {
                        await navigator.clipboard.writeText(`${window.location.origin}/home/book/${book.id}`);
                        toast({
                            title: '🎉 Copied to Clipboard',
                            description: 'Now you can share the URL with your friends on Bookmrk'
                        });
                    }
                }>
                    <ShareIcon className="w-4 h-4" />
                    <p>Share</p>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* <DropdownMenuItem className="space-x-2">
                    <Eye className="w-4 h-4" />
                    <p>View notes</p>
                </DropdownMenuItem> */}

                <DropdownMenuItem className="space-x-2" onClick={() => {
                    router.push(`/home/book/${book.id}/add-note`);
                }}>
                    <Pen className="w-4 h-4" />
                    <p>Add note</p>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="space-x-2" onClick={
                    () => {
                        router.push(`/home/book/${book.id}/edit`);
                    }}>
                    <BookOpen className="w-4 h-4" />
                    <p>Edit book details</p>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="space-x-2 !text-red-700"
                onClick={handleDeleteBookButtonClick}>
                    <Trash2 className="w-4 h-4" />
                    <p>Delete book</p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}