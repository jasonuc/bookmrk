import Dashboard from "@/components/dashboard";
import { currentUser } from "@clerk/nextjs/server";
import DotPattern from "@/components/magicui/dot-pattern";
import Header from "@/components/header";

export default async function UserHomePage() {

  const user = await currentUser()

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-foreground/10">
      <DotPattern className="-z-10" />
      <Header />
      <Dashboard />
    </div>
  )
}