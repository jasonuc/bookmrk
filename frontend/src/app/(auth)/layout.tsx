import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute top-5">
        <Link href="/">
          <h1 className="cursor-pointer z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
            Bookmrk
          </h1>
        </Link>
      </div>

      {children}
    </div>
  )
}