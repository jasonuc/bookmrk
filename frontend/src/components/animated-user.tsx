import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import BlurFade from "@/components/magicui/blur-fade";
import SparklesText from "./magicui/sparkles-text";

export default async function FormattedUser() {

    const user = await currentUser();

    return (
        <BlurFade
        duration={0.5}>
            <div className="flex space-x-2">
                <SparklesText text={`${user?.username}`} className="text-[1rem]" sparklesCount={2} />
                <UserButton />
            </div>
        </BlurFade>
    )
}