import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export const metadata: Metadata = {
  title: "Chookith portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-25 fixed block items-center bg-cream text-2xl font-medium antialiased shadow-lg">
          <div className="flex w-screen flex-row">
            <div className="flex basis-1/2 items-start justify-start p-10">
              <Link
                href="/"
                className=" flex  transition delay-75 hover:-translate-y-2"
              >
                Chookith
              </Link>
            </div>
            <div className=" flex basis-1/2 items-end justify-end">
              <Link
                href="/Contact-Me"
                className=" flex justify-end p-10 transition delay-75 hover:-translate-y-2"
              >
                Contact Me
              </Link>
              <Link
                href="/Contact-Me"
                className=" flex justify-end p-10 transition delay-75 hover:-translate-y-2"
              >
                Contact Me 2
              </Link>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
