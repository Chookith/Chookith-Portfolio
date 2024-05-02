import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import ThemeEnablerBtn from "./_components/theme-enabler-btn";
import ContactMeBtn from "./_components/contact-Me-Btn";

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
        <div className="dark:bg-spaceCadet fixed z-30 hidden w-screen flex-row items-center bg-cream text-2xl font-medium shadow-lg md:flex dark:text-white dark:shadow-[#32304B]">
          <div className="flex basis-1/2 items-start justify-start p-10">
            <Link
              href="/"
              className=" flex transition delay-75 hover:-translate-y-1"
            >
              Chookith
            </Link>
          </div>

          <div className=" flex basis-1/2 items-end justify-end p-10">
            <ThemeEnablerBtn></ThemeEnablerBtn>
            <ContactMeBtn />
          </div>
        </div>

        <div>{children}</div>
      </body>
    </html>
  );
}
