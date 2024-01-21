import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>404 error</h1>
      <p>I'm sorry we looked and couldn't find that page</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}
