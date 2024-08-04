import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function FormattedUser() {

    const user = await currentUser();

    return (
        <div className="absolute right-5 top-5 flex space-x-2">
            <p className="font-bold">{user?.username}</p>
            <UserButton />
        </div>
    )
}