import Dashboard from "@/components/dashboard";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserHomePage() {

  const user = await currentUser()

  return (
    <div>
      <Dashboard />
    </div>
  )
}