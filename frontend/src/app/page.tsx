import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <BookIcon className="h-6 w-6" />
          <span className="sr-only">bookmRk</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Featured
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Categories
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Share Review
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Next Great Read
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    bookmrk is your personal digital library, where you can
                    explore curated book reviews and share your own thoughts.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Explore Reviews
                    </Link>
                  </div>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Book Reviews
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our curated selection of the latest and greatest book
                  reviews.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent>
                    <img
                      src="/placeholder.svg"
                      width="300"
                      height="400"
                      alt="Book Cover"
                      className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover"
                    />
                    <div className="mt-4 space-y-2">
                      <h3 className="text-lg font-bold">
                        The Midnight Library
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        A thought-provoking novel about the power of regret and
                        the importance of making the most of the life we're
                        given.
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Read Review
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <img
                      src="/placeholder.svg"
                      width="300"
                      height="400"
                      alt="Book Cover"
                      className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover"
                    />
                    <div className="mt-4 space-y-2">
                      <h3 className="text-lg font-bold">Atomic Habits</h3>
                      <p className="text-muted-foreground line-clamp-3">
                        A practical guide to building good habits and breaking
                        bad ones, with a focus on small, incremental changes.
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Read Review
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <img
                      src="/placeholder.svg"
                      width="300"
                      height="400"
                      alt="Book Cover"
                      className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover"
                    />
                    <div className="mt-4 space-y-2">
                      <h3 className="text-lg font-bold">Educated</h3>
                      <p className="text-muted-foreground line-clamp-3">
                        A memoir about a young woman's journey to education
                        despite her unconventional upbringing in a survivalist
                        family.
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Read Review
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Popular Categories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through our wide selection of book categories to find
                  your next great read.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <Link
                  href="#"
                  className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground/10"
                  prefetch={false}
                >
                  <BookIcon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium group-hover:underline">
                    Fiction
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground/10"
                  prefetch={false}
                >
                  <BookOpenIcon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium group-hover:underline">
                    Non-Fiction
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground/10"
                  prefetch={false}
                >
                  <FileStackIcon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium group-hover:underline">
                    Classics
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground/10"
                  prefetch={false}
                >
                  <BookIcon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium group-hover:underline">
                    Biography
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Share Your Own Book Review
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Become a part of our growing community of book enthusiasts and
                  share your thoughts on your latest read.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Submit Review
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 bookmrk. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function FileStackIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7h-3a2 2 0 0 1-2-2V2" />
      <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" />
      <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
      <path d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
