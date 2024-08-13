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
  metadataBase: new URL("https://bookmrk.jasonuc.com"),
  title: "Bookmrk",
  description: "Read it, save it, note it!",
  openGraph: {
    url: new URL("https://bookmrk.jasonuc.com"),
    description: "Read it, save it, note it!",
    images: [
      {
        url: '/bookmrk-demo.jpeg',
        width: 800,
        height: 600,
        alt: 'Bookmrk Demo',
      },
      {
        url: '/bookmrk-demo.jpeg',
        width: 1800,
        height: 1600,
        alt: 'Bookmrk Demo',
      },
    ]
  }
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
