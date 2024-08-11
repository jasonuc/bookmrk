"use client"
import { editShelfFormSchema } from "@/schemas/edit-shelf-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import SharedFormFooter from "./shared-form-footer";
import { HexColorPicker } from "react-colorful";
import { Textarea } from "./ui/textarea";
import { useClerk } from "@clerk/nextjs";
import axios from "axios";
import { toast, useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface EditShelfFormProps {
    id: string;
    name: string;
    description: string;
    colour: string;
    userId: string;
    setDialogIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function EditShelfForm({ id, name, description, colour, userId, setDialogIsOpen }: EditShelfFormProps) {

    const clerk = useClerk();
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<z.infer<typeof editShelfFormSchema>>({
        resolver: zodResolver(editShelfFormSchema),
        defaultValues: {
            name: name,
            description: description,
            colour: colour
        },
    })

    async function onSubmit(values: z.infer<typeof editShelfFormSchema>) {
        // Do something with the form values.
        const token = await clerk.session?.getToken();

        try {
            // Send data to the db
            const { data, status } = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/shelves/${id}`,
                { ...values, userId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            // Notifies the user that the note has been added
            if (status === 201) {
                toast({
                    title: 'Shelf Added 🎉',
                    description: `Shelf for ${data.name} has been added!`
                });
            }
        } catch (error) {
            const { response: { data: { message } } } = error as any;

            toast({
                title: '🚫 There was an issue',
                description: message
            });
        }

        // Closes the dialog
        setDialogIsOpen(false)

        // Reset form
        form.reset()

        router.push('/home/manage-shelves');
        router.refresh();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Dan Brown's best" maxLength={60} {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the shelf name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    rows={3}
                                    className="resize-none"
                                    placeholder="blah blah blah..." maxLength={100} {...field} />
                            </FormControl>
                            <FormDescription>
                                A short description of your new shelf.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="colour"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Colour</FormLabel>
                            <FormControl>
                                <HexColorPicker
                                    color={field.value} onChange={field.onChange} />
                            </FormControl>
                            <FormDescription>
                                Colour code for this shelf
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <SharedFormFooter isOnInterceptedRoute={true} />
            </form>
        </Form>
    )
}