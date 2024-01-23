import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-7xl">404 error</h1>
      <p className="mt-5 text-lg">
        I'm sorry we looked and couldn't find that page
      </p>
      <Link
        href="/"
        className="mt-5 rounded-full bg-cream p-5 text-center shadow-xl transition  delay-75 hover:-translate-y-1"
      >
        Go Home
      </Link>
    </div>
  );
}
