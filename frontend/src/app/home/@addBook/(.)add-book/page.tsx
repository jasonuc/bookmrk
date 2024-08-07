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
import AddBookForm from "@/components/add-book-form";

export default function InterceptedAddBookPage() {
  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen, router]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Book 🥳</DialogTitle>
          <DialogDescription>
            Time to expand your literary universe!
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <AddBookForm isOnInterceptedRoute={true} setDialogIsOpen={setIsOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
