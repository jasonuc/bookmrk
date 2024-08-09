import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HomeButtonSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function HomeButtonSection({ className }: HomeButtonSectionProps) {
    return (
        <section className={cn("mx-auto flex gap-x-3.5 items-center justify-end max-md:mt-3 md:mb-3 max-w-6xl", className)}>
            {/* TODO: implement book shelf functionality */}
            <Link href={'#'}>
                <Button
                    variant="outline"
                    size="sm">
                    {"Manage Book Shelves 🗂️"}
                </Button>
            </Link>
        </section>
    )
}