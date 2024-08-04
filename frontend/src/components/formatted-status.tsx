import React from 'react';
import { cn } from "@/lib/utils";
import { Status } from "@/types/book.type";

// Define the component props
interface FormattedStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    status: Status;
}

// Create the component
const FormattedStatus: React.FC<FormattedStatusProps> = ({ status, className, ...divProps }) => {
    return (
        <div
            className={cn(
                "px-2 rounded-tl-sm rounded-br-sm max-w-fit font-bold text-xs text-white hover:rotate-3 hover:scale-105 transition",
                {
                    "bg-blue-500": status === "READING",
                    "bg-gray-500": status === "TBR",
                    "bg-orange-500": status === "DNF",
                    "bg-green-500": status === "FINISHED",
                },
                className
            )}
            {...divProps}
        >
            {status}
        </div>
    );
};

export default FormattedStatus;
