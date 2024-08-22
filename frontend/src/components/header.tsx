import Link from "next/link";
import AnimatedUser from "./animated-user";
import GradualSpacing from "./magicui/gradual-spacing";
import { auth } from "@clerk/nextjs/server";
import { headers } from "next/headers";

export default function Header() {

  const { userId } = auth()
  const headersList = headers()
  const currentPageUrl = headersList.get('referer') || ""

  if (!userId || (currentPageUrl.includes('sign-up') || currentPageUrl.includes('sign-in'))) return null;

  return (
    <div className="w-full h-20 flex items-center justify-between p-4 md:p-10">
      <Link href='/home'>
        <GradualSpacing text="Bookmrk" className="cursor-pointer z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-[2rem] md:text-[2.5rem] font-bold leading-none tracking-tight text-transparent" />
      </Link>

      <AnimatedUser />
    </div>
  )
}