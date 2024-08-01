import { UserButton } from "@clerk/nextjs";

export default function UserHomePage() {
  return (
    <div className="w-dvw h-dvh">
      Hello World (signed in)
      <UserButton  />
    </div>
  );
}
