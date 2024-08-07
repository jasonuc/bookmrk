"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddNoteDialogForm } from "@/components/add-note-dialog-form";
import { Book } from "@/types/book.type";
import { useBookData } from "@/hooks/use-book-data";

interface InterceptedAddNotePageProps {
  params: { id: string };
}

export default function InterceptedAddNotePage({ params }: InterceptedAddNotePageProps) {
  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const book: Book | null = useBookData(params.id);

  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen, router]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] max-h-screen">
        <DialogHeader>
          <DialogTitle>Add New Note 💭</DialogTitle>
          <DialogDescription>
            Nice to see you expanding your literary universe!
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <AddNoteDialogForm book={book} setDialogIsOpen={setIsOpen} isOnInterceptedRoute={true} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
