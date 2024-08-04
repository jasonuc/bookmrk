import "./globals.css";
import '@smastrom/react-rating/style.css';
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { lato } from "@/lib/fonts";
import { auth } from "@clerk/nextjs/server";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import DotPattern from "@/components/magicui/dot-pattern";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Bookmrk",
  description: "Read it, save it, log it !)",
};

export default function RootLayout({ children, guestView }: Readonly<{ children: React.ReactNode; guestView: React.ReactNode; }>) {

  const { userId }: { userId: string | null } = auth();
  return (
    <ClerkProvider afterSignOutUrl={'/'}>
      <TooltipProvider>
        <html lang="en">
          <body className={cn(lato.variable, 'font-lato relative flex min-h-screen w-full flex-col bg-foreground/5')}>
            {userId && <DotPattern className="-z-50" />}
            {userId && <Header />}
            {userId && children}
            {!userId && guestView}
          </body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}
