import "./globals.css";
import '@smastrom/react-rating/style.css'
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { lato } from "@/lib/fonts";
import { auth } from "@clerk/nextjs/server";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export const metadata: Metadata = {
  title: "Bookmrk",
  description: "Read it, save it, log it !)",
};

export default function RootLayout({ children, userView }: Readonly<{ children: React.ReactNode; userView: React.ReactNode; }>) {

  const { userId }: { userId: string | null } = auth();

  return (
    <ClerkProvider afterSignOutUrl={'/'}>
      <TooltipProvider>
        <html lang="en">
          <body className={cn(lato.variable, 'font-lato')}>
            {!userId ? children : userView}
          </body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}
