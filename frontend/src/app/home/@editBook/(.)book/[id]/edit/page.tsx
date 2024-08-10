"use client";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import EditBookForm from "@/components/edit-book-form";
import { Book } from "@/types/book.type";
import { useBookData } from "@/hooks/use-book-data";

interface InterceptedEditBookPageProps {
    params: { id: string };
}

export default function InterceptedEditBookPage({ params }: InterceptedEditBookPageProps) {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);
    const book: Book | null = useBookData(params.id)

    useEffect(() => {
        if (!isOpen) {
            router.back();
        }
    }, [isOpen, router]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Book 📝</DialogTitle>
                    <DialogDescription>
                        So what changes are we gonna make today?
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <EditBookForm book={book} isOnInterceptedRoute={true} setDialogIsOpen={setIsOpen} />
                </div>
            </DialogContent>
        </Dialog>
    )
}