import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { lato } from "@/lib/fonts";
import { auth } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Bookmrk",
  description: "Read it, save it, log it !)",
};

export default function RootLayout({ children, userHomePage }: Readonly<{ children: React.ReactNode; userHomePage: React.ReactNode; }>) {

  const { userId }: { userId: string | null } = auth();

  return (
    <ClerkProvider afterSignOutUrl={'/'}>
      <html lang="en">
        <body className={cn(lato.variable, 'font-lato')}>
          {!userId ? children : userHomePage}
        </body>
      </html>
    </ClerkProvider>
  );
}
