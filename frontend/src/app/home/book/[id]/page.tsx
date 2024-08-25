import FormattedStatus from "@/components/formatted-status";
import BlurFade from "@/components/magicui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { Book } from "@/types/book.type";
import { auth } from "@clerk/nextjs/server";
import { Rating } from "@smastrom/react-rating";
import { format } from "date-fns";
import axios from "axios";
import SparklesText from "@/components/magicui/sparkles-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NotesListDisplay from "@/components/notes-display";
import { Note } from "@/types/note.type";

async function getBookData(bookId: string): Promise<Book> {
  const { getToken } = auth();
  const token = await getToken();

  const { data: booksData } = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${bookId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return booksData
}

async function getNotes(bookId: string): Promise<Note[]> {
  const { getToken } = auth();
  const token = await getToken();

  const { data: notes } = await axios<Note[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/book/${bookId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return notes;
}

const makeDelay = (name: string, start: number, increment: number) => {
  let delay = 0.1;

  const increase = () => {
    delay += increment;
    return delay;
  }

  return increase
}

export default async function BookPage({ params }: { params: { id: string } }) {

  const { id } = params;
  const book = await getBookData(id);
  const { userId: viewerUserId } = auth()
  const blurFadeDelay = makeDelay("Blur Fade Component's Delay", 0.1, 0.1);

  const notes = await getNotes(id);
  const notesAreEmpty = notes.length === 0;

  const { title, rating, status, lastUpdated, dateAdded, userId, user, imageUrl } = book;

  return (
    <div className="p-5 md:p-10 flex flex-col items-start space-y-8 md:space-y-10 grow">

      <BlurFade yOffset={10} className="w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row space-x-5 space-y-5 items-center rounded-md max-w-fit">
          <h2 className="text-2xl md:text-4xl font-bold italic">{title}</h2>

          <div className="max-w-44">
            <Rating value={rating} readOnly
              className="w-44 md:w-40 relative md:bottom-1.5"
            />
          </div>
        </div>
      </BlurFade>

      <div className={cn("pb-5  gap-5 w-full h-full text-lg", {
        "grid grid-cols-1 md:grid-rows-1 md:grid-cols-2": !notesAreEmpty,
        "grid-rows-[25%_75%]": viewerUserId !== userId && !notesAreEmpty,
        "grid-rows-[20%_80%]": viewerUserId === userId && !notesAreEmpty,
        "flex flex-col justify-center items-center": notesAreEmpty
      })}>

        <div className="col-span-1 flex flex-col space-y-8 md:space-y-10">
          <BlurFade delay={blurFadeDelay()}>
            <div className="flex items-center space-x-2">
              <p className="font-bold">Status: </p>
              <FormattedStatus status={status} className="text-base px-4 py-1" />
            </div>
          </BlurFade>

          <BlurFade delay={blurFadeDelay()}>
            <div className="flex space-x-3 items-center">
              <p className="font-semibold">{`Updated @ ${format(new Date(lastUpdated), "dd/MM/yyyy")}`}</p>
              <Separator orientation="vertical" className="bg-black max-md:hidden" />
              <p className="font-semibold">{`Added @ ${format(new Date(dateAdded), "dd/MM/yyyy")}`}</p>
            </div>
          </BlurFade>

          <BlurFade delay={blurFadeDelay()}>
            <div className="flex space-x-3 items-center">
              {viewerUserId !== userId && (
                <div className="flex space-x-1"><span>Added by </span><SparklesText sparklesCount={2} as={<span />} text={user?.username} className="text-lg" /></div>
              )}
            </div>
          </BlurFade>

          <BlurFade delay={blurFadeDelay()}>
            <div className={cn("size-full md:flex", {
              "max-md:hidden w-fit": !notesAreEmpty,
              "hidden": !!imageUrl,
            })}>
              <Image src={imageUrl} width={300} height={300} className="object-fill grow" alt="Image" />
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={blurFadeDelay()} className={cn({
          "hidden": notesAreEmpty
        })}>
          <div className={cn("w-full h-full", {
            "bg-muted-foreground/20": notesAreEmpty
          })}>
            <NotesListDisplay notes={notes} />
          </div>
        </BlurFade>

      </div>
    </div>
  )
}