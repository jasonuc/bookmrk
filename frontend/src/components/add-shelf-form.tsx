"use client";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import axios, { AxiosError } from "axios";
import { Textarea } from "./ui/textarea";
import SharedFormFooter from "./shared-form-footer";
import { addShelfFormSchema } from "@/schemas/add-shelf-form.schema";
import { Shelf } from "@/types/shelf.type";
import { Input } from "./ui/input";
import { HexColorPicker } from 'react-colorful';
import { getRandomHexColour } from "@/lib/get-random-hex-colour";

interface AddShelfFormProps extends React.HTMLAttributes<HTMLDivElement> {
    setDialogIsOpen?: ((isOpen: boolean) => void);
    isOnInterceptedRoute?: boolean;
}

export default function AddShelfForm({ setDialogIsOpen, isOnInterceptedRoute = false, className }: AddShelfFormProps) {

    const { toast } = useToast();

    const router = useRouter();

    const clerk = useClerk();

    const form = useForm<z.infer<typeof addShelfFormSchema>>({
        resolver: zodResolver(addShelfFormSchema),
        defaultValues: {
            colour: getRandomHexColour()
        },
    })

    async function onSubmit(values: z.infer<typeof addShelfFormSchema>) {
        // Do something with the form values.
        const token = await clerk.session?.getToken();

        try {
            // Send data to the db
            const { data, status } = await axios.post<Shelf>(`${process.env.NEXT_PUBLIC_API_URL}/api/shelves`, {
                ...values,
                userId: clerk.user?.id
            }, {
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
        isOnInterceptedRoute && (setDialogIsOpen as Function)(false);

        // Reset form
        form.reset()

        router.push('/home/manage-shelves');
        router.refresh();
    }

    return (
        <div className={className}>
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

                    <SharedFormFooter isOnInterceptedRoute={isOnInterceptedRoute} />
                </form>
            </Form>
        </div>
    )
}