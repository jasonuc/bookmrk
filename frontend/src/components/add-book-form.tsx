"use client";
import "@uploadcare/react-uploader/core.css"

import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addBookFormSchema } from "@/schemas/add-book-form.schema";
import { Status } from "@/types/book.type";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import FileUploader from "./file-uploader";
import { useState } from "react";
import { CheckCircle2Icon } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import { useToast } from "@/components/ui/use-toast";

interface AddBookFormProps {
    setDialogIsOpen: false | ((isOpen: boolean) => void);
    isOnInterceptedRoute?: boolean;
}

export default function AddBookForm({ setDialogIsOpen, isOnInterceptedRoute = false }: AddBookFormProps) {

    const { toast } = useToast()

    const [fileUploaded, setFileUploaded] = useState<boolean>(false)

    const form = useForm<z.infer<typeof addBookFormSchema>>({
        resolver: zodResolver(addBookFormSchema),
        defaultValues: {
            title: "",
            imageUrl: "",
            rating: 0,
            status: Status.TBR,
        }
    })

    function onSubmit(values: z.infer<typeof addBookFormSchema>) {
        // Do something with the form values.
        console.log(values); // Prints the form values
        
        // Notifies the user that the book has been added
        toast({
            title: 'Book Added 🎉',
            description: `${values.title} has been added!`
        });

        // Closes the dialog if it is open ( which means it's currently using the parallel intercepted route )
        isOnInterceptedRoute && (setDialogIsOpen as Function)(false);
    }


    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="The Midnight Library" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the title of the book.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <div className="relative w-fit flex space-x-3 items-center">
                                        <FileUploader setFileUploaded={setFileUploaded} value={field.value} onChange={field.onChange} />
                                        {fileUploaded && <CheckCircle2Icon color="#15803d" />}
                                    </div>
                                </FormControl>
                                <FormDescription>
                                    Here you can add an image that captures the book{"'"}s vibe.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rating</FormLabel>
                                <FormControl>
                                    <div className="flex space-x-3 items-center justify-between">
                                        <Rating className="max-w-[12rem]" value={field.value} onChange={field.onChange} />
                                    </div>
                                </FormControl>
                                <FormDescription>
                                    How{"'"}s the book going so far? You can leave this empty.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue defaultValue={Status.TBR} className="text-black" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value={Status.TBR}>TBR</SelectItem>
                                        <SelectItem value={Status.READING}>READING</SelectItem>
                                        <SelectItem value={Status.FINISHED}>FINISHED</SelectItem>
                                        <SelectItem value={Status.DNF}>DNF</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    For you noobs, TBR: To Be Read | DNF: Did Not Finish
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="w-full pt-5">
                        <Button type="submit" className="float-right">Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}