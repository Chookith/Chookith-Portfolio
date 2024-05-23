import type { Metadata } from "next";
import "./globals.css";

import ThemeEnablerBtn from "./_components/theme-enabler-btn";
import ContactMeBtn from "./_components/contact-Me-Btn";
import HomeButton from "./_components/home-button";

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
        <article className="fixed z-30 flex w-screen flex-row items-center justify-center bg-cream py-5 text-2xl font-medium shadow-lg sm:p-10 dark:bg-spaceCadet dark:text-white dark:shadow-[#32304B]">
          <HomeButton />
          <div className="flex min-w-fit basis-full flex-row justify-normal sm:max-w-fit sm:basis-1/3 sm:justify-end xl:basis-1/5">
            <ThemeEnablerBtn></ThemeEnablerBtn>
            <ContactMeBtn />
          </div>
        </article>

        <div>{children}</div>
      </body>
    </html>
  );
}
