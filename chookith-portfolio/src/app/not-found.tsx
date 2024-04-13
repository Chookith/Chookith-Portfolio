import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex h-full w-auto flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center md:ml-10 md:basis-1/2 lg:mt-32 xl:h-auto">
          <Link
            href="/PrettyQuotes"
            className="hidden rounded-full text-center text-white transition delay-75 hover:-translate-y-1 lg:flex"
          >
            pretty quotes
          </Link>
          <h1 className="text-7xl">404 error</h1>
          <p className="mt-5 text-lg">
            I don't know how you got here or what you're trying to find...
          </p>
          <Link
            href="/"
            className="mt-5 rounded-full bg-cream p-5 text-center shadow-xl transition  delay-75 hover:-translate-y-1"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
