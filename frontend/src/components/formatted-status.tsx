import { cn } from "@/lib/utils";
import { Status } from "@/types/book.type";

export default function FormattedStatus({ status }: { status: Status }) {
    return (
        <div className={cn("px-2 rounded-tl-sm rounded-br-sm max-w-fit font-bold text-xs", {
            "bg-blue-500": status === "READING",
            "bg-gray-500": status === "TBR",
            "bg-orange-500": status === "DNF",
            "bg-green-500": status === "FINISHED",
        })}>
            {status}
        </div>
    )
}