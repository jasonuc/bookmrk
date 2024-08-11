import BlurFade from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getBook } from "@/lib/get-book";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AddShelfPage() {

  const { getToken, userId } = auth();
  const token = await getToken();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <BlurFade delay={0.1}>
        <Card className="sm:max-w-[500px] md:w-[30rem] pt-1">
          <CardHeader>
            <CardTitle>Add New Shelf 🐛</CardTitle>
            <CardDescription>
              A new universe already! Let{"'"}s see what this one{"'"}s about
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <div className="grid gap-4 pb-2">
              <p>form goes here</p>
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}