import LetterPullup from "@/components/magicui/letter-pullup";
import RetroGrid from "@/components/magicui/retro-grid";
import ShinyButton from "@/components/magicui/shiny-button";
import Link from "next/link";

export default function GuestLandingPage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">

      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Bookmrk
        </h1>
        <LetterPullup words="Read it, save it, log it !)"
          className="text-sm" />
      </div>

      <Link href='/sign-up' className="mt-7">
          <ShinyButton text="Begin your journey now 🎉" />
      </Link>

      <RetroGrid />
    </main>
  )
}
