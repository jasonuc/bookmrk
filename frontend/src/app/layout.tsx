import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { lato } from "@/lib/fonts";
import { neobrutalism } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Bookmrk",
  description: "Read it, save it, log it !)",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ClerkProvider afterSignOutUrl={'/'} appearance={{
      baseTheme: [neobrutalism]
    }}>
      <html lang="en">
        <body className={cn(lato.variable, 'font-lato')}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
