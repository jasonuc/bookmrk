"use client";
import "@uploadcare/react-uploader/core.css"

import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addBookFormSchema } from "@/schemas/add-book-form.schema";
import { Book, Status } from "@/types/book.type";
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
import { Rating } from "@smastrom/react-rating";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useClerk, useUser } from "@clerk/nextjs";
import { useEffect, useLayoutEffect, useState } from "react";
import SharedFormFooter from "./shared-form-footer";
import { Shelf } from "@/types/shelf.type";
import { MY_BOOKSHELF } from "@/lib/constants";

interface AddBookFormProps {
    setDialogIsOpen?: ((isOpen: boolean) => void);
    isOnInterceptedRoute?: boolean;
}

export default function AddBookForm({ setDialogIsOpen, isOnInterceptedRoute = false }: AddBookFormProps) {

    const { toast } = useToast();

    const router = useRouter();

    const { user } = useUser();
    const clerk = useClerk();

    const [shelves, setShelves] = useState<Shelf[]>();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        const getShelves = async () => {

            const token = await clerk.session?.getToken();

            const { data: shelves } = await axios.get<Shelf[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/shelves/user/${user?.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setShelves(shelves);
            shelves?.find(shelf => shelf.name === MY_BOOKSHELF)?.id || MY_BOOKSHELF
        }

        getShelves();

    }, [clerk.session, user?.id])

    const form = useForm<z.infer<typeof addBookFormSchema>>({
        resolver: zodResolver(addBookFormSchema),
        defaultValues: {
            title: "",
            imageUrl: "",
            rating: 0,
            status: Status.TBR,
        }
    });

    async function onSubmit(values: z.infer<typeof addBookFormSchema>) {
        // Do something with the form values.
        console.log(values); // Prints the form values
        // console.log(user?.id);
        const token = await clerk.session?.getToken();
        // console.log(token);

        const { data, status } = await axios.post<Book>(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, {
            ...values,
            userId: user?.id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });


        // Notifies the user that the book has been added
        if (status === 201) {
            toast({
                title: 'Book Added 🎉',
                description: `${data.title} has been added!`
            });
        } else {
            toast({
                title: 'There was an issue 🙁',
                description: `Please try again.`
            })
        }

        // Closes the dialog if it is open ( which means it's currently using the parallel intercepted route )
        isOnInterceptedRoute && (setDialogIsOpen as Function)(false);

        // Reset form
        form.reset()

        // take user home as it is the only way i know how to clear the contents of the fileuploader component
        router.push('/home');
        router.refresh();
    }

    if (!isMounted) return null;

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
                                    <FileUploader value={field.value} onChange={field.onChange} />
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

                    <FormField
                        control={form.control}
                        name="shelfId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Shelf</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            { shelves?.length === 0 ? (
                                                <SelectValue defaultValue={MY_BOOKSHELF} placeholder={MY_BOOKSHELF} className="data-[placeholder]:text-black" />
                                            ) : (
                                                <SelectValue placeholder="Select a Bookshelf" className="data-[placeholder]:text-black" />
                                            ) }
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {shelves?.map((shelf, key) => (
                                            <SelectItem key={key} value={shelf.id}>{shelf.name}</SelectItem>
                                        ))}
                                        {shelves?.length === 0 && <SelectItem value={MY_BOOKSHELF}>{MY_BOOKSHELF}</SelectItem>}
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Which bookshelf is this gonna go in?
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <SharedFormFooter isOnInterceptedRoute={isOnInterceptedRoute} />
                </form>
            </Form>
        </div>
    )
}