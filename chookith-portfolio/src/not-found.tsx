import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 error</h2>
      <p>I'm sorry we looked and couldn't find that page</p>
      <Link href="/chookith-portfolio/src/app/page.tsx"></Link>
    </div>
  );
}
