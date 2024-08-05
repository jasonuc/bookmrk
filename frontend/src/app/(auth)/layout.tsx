import RetroGrid from "@/components/magicui/retro-grid";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <main>
        {children}
        
        <RetroGrid />
      </main>
    </div>
  )
}