import LetterPullup from "@/components/magicui/letter-pullup";
import RetroGrid from "@/components/magicui/retro-grid";
import ShinyButton from "@/components/magicui/shiny-button";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function LandingPage() {

  const { userId } = auth();

  return (
    <main className={cn("relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", {
      "h-screen": !userId,
      "h-[90.9vh]": userId,
    })}>

      <div className="flex flex-col items-center justify-center space-y-2">
        <Link href={userId ? '/home' : '/'}>
          <h1 className="cursor-pointer z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Bookmrk
          </h1>
        </Link>
        <LetterPullup words="Read it, save it, log it !)"
          className="text-sm" />
      </div>

      <Link href='/sign-up' className="mt-7">
        <ShinyButton text={userId ? 'Continue your journey now 🙌' : "Begin your journey now 🎉"} />
      </Link>

      <RetroGrid />
    </main>
  )
}
