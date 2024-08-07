import AddNoteForm from "@/components/add-note-form";
import BlurFade from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useBookData } from "@/hooks/use-book-data";
import { Book } from "@/types/book.type";
import { useClerk } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

interface AddNotePageProps {
  params: { id: string };
}

export default async function AddNotePage({ params }: AddNotePageProps) {

  const { id: bookId } = params;

  const { getToken } = auth();
  const token = await getToken();
  const { data: book } = await axios.get<Book>(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${bookId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <BlurFade delay={0.1}>
        <Card className="sm:max-w-[500px] md:w-[30rem] pt-1">
          <CardHeader>
            <CardTitle>Add New Note 💭</CardTitle>
            <CardDescription>
              Nice to see you expanding your literary universe!
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <div className="grid gap-4 pb-2">
              <AddNoteForm book={book} isOnInterceptedRoute={false} />
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}