import "./globals.css";
import '@smastrom/react-rating/style.css';
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { lato } from "@/lib/fonts";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import DotPattern from "@/components/magicui/dot-pattern";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Bookmrk",
  description: "Read it, save it, log it !)",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <ClerkProvider afterSignOutUrl={'/'} signInFallbackRedirectUrl={'/home'} signUpFallbackRedirectUrl={'/home'}>
      <TooltipProvider>
        <html lang="en">
          <body className={cn(lato.variable, 'font-lato relative flex min-h-screen w-full flex-col text-black bg-foreground/5')}>
            <Header />
            {children}

            <Toaster />
            <DotPattern  className="-z-[100]" />
          </body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}
