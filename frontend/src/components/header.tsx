import Link from "next/link";
import AnimatedUser from "./animated-user";
import GradualSpacing from "./magicui/gradual-spacing";

export default function Header() {
  return (
    <div className="w-full h-20 flex items-center justify-between p-4 md:p-10">
      <Link href='/'>
        <GradualSpacing text="Bookmrk" className="text-[2rem] md:text-[2.5rem] font-bold" />
      </Link>

      <AnimatedUser />
    </div>
  )
}