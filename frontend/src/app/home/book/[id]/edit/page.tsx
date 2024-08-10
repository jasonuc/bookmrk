import EditBookForm from "@/components/edit-book-form";
import BlurFade from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getBook } from "@/lib/get-book";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface EditBookPageProps {
    params: { id: string };
}

export default async function EditBookPage({ params }: EditBookPageProps) {

    const { id: bookId } = params;

    const { getToken, userId } = auth();
    const token = await getToken();
    const { book } = await getBook(bookId, token!);

    if (book.userId !== userId) redirect('/home');

    return (
        <div className="w-full h-full flex items-center justify-center">
            <BlurFade delay={0.1}>
                <Card className="sm:max-w-[500px] md:w-[30rem] pt-1">
                    <CardHeader>
                        <CardTitle>Edit Book 📝</CardTitle>
                        <CardDescription>
                            So what changes are we gonna make today?
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="">
                        <div className="grid gap-4 pb-2">
                            <EditBookForm book={book} isOnInterceptedRoute={false} />
                        </div>
                    </CardContent>
                </Card>
            </BlurFade>
        </div>
    )
}