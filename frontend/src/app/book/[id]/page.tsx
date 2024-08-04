import FormattedStatus from "@/components/formatted-status";
import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";
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
    <div className="p-5 md:p-10 flex flex-col items-start space-y-10">

      <div className="flex space-x-5 items-center rounded-md border-2 border-solid border-black p-2 max-w-fit">
        <GradualSpacing text={title}
          className="text-4xl font-bold italic"
        />

        <BlurFade yOffset={10}>
          <Rating value={rating} readOnly
            className="w-32"
          />
        </BlurFade>
      </div>

      <div className="flex items-center space-x-2">
        <p className="font-bold">Status: </p>
        <FormattedStatus status={status} className="text-base px-4 py-1" />
      </div>

      <div className="flex space-x-3 items-center">
        <p className="text-lg font-semibold">{`Updated @ ${format(new Date(lastUpdated), "dd/MM/yyyy")}`}</p>
        <Separator orientation="vertical" className="bg-black" />
        <p className="text-lg font-semibold">{`Added @ ${format(new Date(dateAdded), "dd/MM/yyyy")}`}</p>
      </div>


    </div>
  )
}