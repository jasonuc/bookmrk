import { lato } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={cn(lato.variable, "w-dvw h-dvh flex flex-col items-center justify-center relative m-0")}>
        <div className="absolute top-0 w-dvw flex flex-col items-center gap-y-1.5 pt-5">
            <h1 className="text-3xl font-bold">Bookmrk</h1>
            <p className="text-sm italic">Read it, save it, log it !</p>
        </div>
        {children}
    </main>
  )
}