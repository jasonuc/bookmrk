export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"w-dvw h-dvh flex flex-col items-center justify-center"}>
      <main>
        {children}
      </main>
    </div>
  )
}