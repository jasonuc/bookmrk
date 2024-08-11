import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

interface ManageShelvesButtonSectionProps extends React.HTMLAttributes<HTMLDivElement> { }


export default function ManageShelvesButtonSection({ className }: ManageShelvesButtonSectionProps) {
    return (
        <section className={cn("mx-auto w-full flex gap-x-3.5 items-center justify-end mb-3 max-w-6xl", className)}>
            <Link href={'/home'}>
                <Button
                    variant="outline"
                    size="sm">
                    <Home className="size-4" />
                    <span className="ml-1.5">{"Go Home"}</span>
                </Button>
            </Link>

            <Link href={'/home/add-shelf'}>
                <Button
                    variant="outline"
                    size="sm">
                    {"Add Book Shelf ➕"}
                </Button>
            </Link>
        </section>
    )
}