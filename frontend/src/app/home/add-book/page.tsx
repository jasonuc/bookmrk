"use client"
import AddBookForm from "@/components/add-book-form";
import BlurFade from "@/components/magicui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddNewBookPage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <BlurFade delay={0.1}>
        <Card className="sm:max-w-[500px] pt-1">
          <CardHeader>
            <CardTitle>Add New Book 🥳</CardTitle>
            <CardDescription>
              Time to expand your literary universe!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 pb-2">
              <AddBookForm setDialogIsOpen={false} />
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}