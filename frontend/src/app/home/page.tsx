import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="w-dvw h-dvh">
      Hello World (signed in)
      <UserButton />
    </div>
  );
}
