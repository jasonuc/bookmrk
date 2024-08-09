"use client";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNoteDialogFormSchema } from "@/schemas/add-note-form.schema";
import { Note } from "@/types/note.type";
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
import axios from "axios";
import { Textarea } from "./ui/textarea";
import { Book } from "@/types/book.type";
import SharedFormFooter from "./shared-form-footer";

interface AddNoteFormProps extends React.HTMLAttributes<HTMLDivElement> {
  setDialogIsOpen?: ((isOpen: boolean) => void);
  isOnInterceptedRoute?: boolean;
  book?: Book | null;
}

export default function AddNoteForm({ setDialogIsOpen, isOnInterceptedRoute = false, book = null, className }: AddNoteFormProps) {

  const { toast } = useToast();

  const router = useRouter();

  const clerk = useClerk();

  const form = useForm<z.infer<typeof addNoteDialogFormSchema>>({
    resolver: zodResolver(addNoteDialogFormSchema),
    defaultValues: {
      content: "",
    },
  })


  async function onSubmit(values: z.infer<typeof addNoteDialogFormSchema>) {
    // Do something with the form values.
    const token = await clerk.session?.getToken();

    // Send data to the db
    const { data, status } = await axios.post<Note>(`${process.env.NEXT_PUBLIC_API_URL}/api/notes`, {
      ...values,
      bookId: book?.id,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Notifies the user that the note has been added
    if (status === 201) {
      toast({
        title: 'Note Added 🎉',
        description: `Note for ${data.book.title} has been added!`
      });
    } else {
      toast({
        title: 'There was an issue 🙁',
        description: `Please try again.`
      })
    }

    // Closes the dialog
    isOnInterceptedRoute && (setDialogIsOpen as Function)(false);

    // Reset form
    form.reset()

    // take user home as it is the only way i know how to clear the contents of the fileuploader component
    router.push('/home');
  }

  if (!book) return null;

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note for <span className="font-bold">{book.title}</span></FormLabel>
                <FormControl>
                  <Textarea placeholder="Wow, this book is quite different from the rest!"
                    rows={10}
                    className="max-h-[35rem]"
                    {...field} />
                </FormControl>
                <FormDescription>
                  Here you can yap all you want 😄
                  {field.value.length > 500 && <><br />Woah! That{"'"}s a lot of yapping 💀</>}
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

