"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Shelf } from "@/types/shelf.type";
import { PenBoxIcon } from "lucide-react";
import EditShelfForm from "./edit-shelf-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function EditShelfButton({ id, name, description, colour, userId }: Omit<Shelf, 'book'>) {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button size="icon" variant="secondary">
                    <PenBoxIcon className="size-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Shelf 📑</DialogTitle>
                    <DialogDescription>
                        Make changes to your shelf here.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <EditShelfForm id={id} name={name} description={description} colour={colour} setDialogIsOpen={setIsOpen} userId={userId} />
                </div>
            </DialogContent>
        </Dialog>
    )
}