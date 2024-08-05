import Link from "next/link";
import AnimatedUser from "./animated-user";
import GradualSpacing from "./magicui/gradual-spacing";
import { auth } from "@clerk/nextjs/server";

export default function Header() {

  const { userId } = auth()

  if (!userId) return null;

  return (
    <div className="w-full h-20 flex items-center justify-between p-4 md:p-10">
      <Link href='/home'>
        <GradualSpacing text="Bookmrk" className="text-[2rem] md:text-[2.5rem] font-bold" />
      </Link>

      <AnimatedUser />
    </div>
  )
}