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
import AddShelfForm from "@/components/add-shelf-form";

interface InterceptedAddShelfPageProps {   }

export default function InterceptedAddShelfPage({  }: InterceptedAddShelfPageProps) {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (!isOpen) {
            router.back();
        }
    }, [isOpen, router]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[425px] max-h-screen">
            <DialogHeader>
              <DialogTitle>Add New Shelf 🐛</DialogTitle>
              <DialogDescription>
                A new universe already! Let{"'"}s see what this one{"'"}s about
              </DialogDescription>
            </DialogHeader>
    
            <div className="grid gap-4 py-4">
              <AddShelfForm isOnInterceptedRoute={true} setDialogIsOpen={setIsOpen} />
            </div>
          </DialogContent>
        </Dialog>
      );
}