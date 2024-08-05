import FormattedStatus from "@/components/formatted-status";
import Header from "@/components/header";
import BlurFade from "@/components/magicui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { Book } from "@/types/book.type";
import { auth } from "@clerk/nextjs/server";
import { Rating } from "@smastrom/react-rating";
import { format } from "date-fns";

async function getBookData(bookId: string): Promise<Book> {
  const { getToken } = auth();
  const token = await getToken();

  const userBooksRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${bookId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const booksData: Book = await userBooksRes.json();

  return booksData
}

export default async function BookPage({ params }: { params: { id: string } }) {

  const { id } = params;
  const book = await getBookData(id);

  const { title, rating, status, lastUpdated, dateAdded } = book;

  return (
    <div className="p-5 md:p-10 flex flex-col items-start space-y-8 md:space-y-10 grow">
      <Header />

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

      <div className="pb-2 grid grid-cols-1 grid-rows-[15%_85%] md:grid-rows-1 md:grid-cols-2 gap-y-5 w-full h-full">

        <div className="col-span-1 flex flex-col space-y-8 md:space-y-10">
          <BlurFade delay={0.1}>
            <div className="flex items-center space-x-2">
              <p className="font-bold">Status: </p>
              <FormattedStatus status={status} className="text-base px-4 py-1" />
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="flex space-x-3 items-center">
              <p className="text-lg font-semibold">{`Updated @ ${format(new Date(lastUpdated), "dd/MM/yyyy")}`}</p>
              <Separator orientation="vertical" className="bg-black max-md:hidden" />
              <p className="text-lg font-semibold">{`Added @ ${format(new Date(dateAdded), "dd/MM/yyyy")}`}</p>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.3}>
          <div className="bg-muted-foreground w-full h-full" />
        </BlurFade>

      </div>
    </div>
  )
}