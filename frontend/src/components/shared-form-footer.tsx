"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";

interface SharedFormFooterProps {
    isOnInterceptedRoute?: boolean
}

export default function SharedFormFooter({ isOnInterceptedRoute }: SharedFormFooterProps) {
    return (
        <div className={cn("w-full pt-5", {
            "flex justify-between": !isOnInterceptedRoute
        })}>
            {!isOnInterceptedRoute && (
                <Link href="/home">
                    <Button type="button" variant="secondary" className="flex items-center gap-x-2">
                        <MoveLeft className="size-4" />
                        Back
                    </Button>
                </Link>
            )}

            <Button type="submit" className={cn({ "float-right": !isOnInterceptedRoute })}>Submit</Button>
        </div>
    )
}