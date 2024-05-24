import { Suspense } from "react";
import Image from "next/image";
import myPhoto from "../public/images/my-photo.jpeg";

import Loading from "../loading";
import Link from "next/link";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="dark:bg-nyx dark:text-white">
        <section className="flex w-auto flex-col md:flex-row lg:h-screen ">
          <section className="mt-28 flex flex-col items-center justify-center md:ml-10 md:mt-32 md:basis-1/2 lg:mt-28 lg:h-auto">
            <h1 className="mt-5 animate-[dropIn2_1200ms_ease_300ms_backwards] items-center justify-center text-center text-4xl sm:mt-10 sm:text-5xl md:mt-0 ">
              I am
            </h1>
            <h1 className="mt-7 animate-[dropIn2_1200ms_ease_400ms_backwards] items-center justify-center text-center text-6xl sm:text-7xl md:mt-16 lg:mt-28 lg:text-8xl xl:text-9xl">
              Chookith
            </h1>
            <div className=" flex animate-[dropIn_1200ms_ease_500ms_backwards] flex-row items-center justify-center py-7 lg:mt-20">
              <p className="mx-2 animate-[bouncing_2s_ease_1700ms] rounded-full bg-teaGreen p-3 shadow-lg transition sm:mr-4 dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                React
              </p>
              <p className="mx-2 animate-[bouncing_2s_ease_1900ms] rounded-full bg-teaGreen p-3 shadow-lg transition sm:mr-4 dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                Tailwind
              </p>
              <p className="mx-2 animate-[bouncing_2s_ease_2100ms] rounded-full bg-teaGreen p-3 shadow-lg transition sm:mr-4 dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                TypeScript
              </p>
            </div>
            <p className="animate-dropIn2 items-center justify-center text-center">
              I'm a Front End Developer based in <br /> Queensland, Australia
            </p>
          </section>
          <section className="mt-10 flex items-center justify-center md:mr-10 md:mt-32 md:basis-1/2 lg:mt-28">
            <Image
              src={myPhoto}
              priority={true}
              width={1242}
              height={2208}
              alt="smiling woman with green head wrap, glasses, and a black shirt"
              className=" flex w-1/2 animate-[dropIn_1200ms_ease_700ms_backwards] items-center justify-center rounded-3xl  xl:rounded-full 2xl:w-5/12"
            ></Image>
          </section>
        </section>
        <section className="m-10 flex h-auto w-auto flex-col">
          <h1 className="mb-5 animate-[dropIn_1200ms_ease_300ms_backwards] items-center justify-center text-center text-5xl">
            About Me
          </h1>
          <div className="flex flex-col items-center justify-center divide-y lg:flex-row lg:divide-x  lg:divide-y-0 lg:divide-solid">
            <article className="animate-[dropIn_1200ms_ease_400ms_backwards] flex-col items-center justify-center lg:mr-5 lg:flex lg:basis-1/2 ">
              <q className="hidden rounded-full bg-ashBlue p-16 text-2xl lg:flex xl:hidden dark:bg-caribbeanCurrent">
                i. first there was light and then there were colors, and from
                the beginning we looked at the colors and we loved them, and we
                touched them, silk streaked veins and our rough hands dragging
                over these pieces of starlight
              </q>
              <q className="hidden rounded-full bg-ashBlue p-10 text-lg sm:flex md:hidden dark:bg-caribbeanCurrent">
                ii. little did we know we were made of stardust too.
              </q>
              <q className=" hidden rounded-full bg-ashBlue p-10 text-lg md:flex lg:hidden dark:bg-caribbeanCurrent">
                iii. paint splattered hands and blank canvases, we are fragile
                things because we are taught there is no need for us anymore. No
                need for these benders of color, for these beautiful beings who
                filter these remnants of stars into tangible things.
              </q>
              <q className="hidden rounded-full bg-ashBlue p-16 text-2xl 2xl:flex dark:bg-caribbeanCurrent">
                iv. in our fragile worlds we build for ourselves great cities
                and towering portals that lead elsewhere, these brushes, these
                pens; they are our escape. They are the only way out from this
                harsh world of cigarettes and sleeping jets cradling iron
                bombshells. here in these worlds the colors are muted; they are
                soft and gentle like crushed violets, and most of all, they are
                safe
              </q>
              <q className="hidden rounded-full bg-ashBlue p-16 text-2xl xl:flex 2xl:hidden dark:bg-caribbeanCurrent">
                v. but we are strong too. and in our soft bodies behind aprons
                and cloth and warm skin we harbor iron and steel and we will not
                be broken. because we are needed in this cruel world and we hold
                it together with words intertwined like spun sugar. because we
                looked at those colors and thought they can be more.
              </q>
              <q className="flex rounded-full bg-ashBlue p-10 text-lg sm:hidden dark:bg-caribbeanCurrent">
                vi. we have constellations in our eyes and sunlight in our skin
              </q>

              <p className="flex justify-center text-center text-sm">
                -unknown, <i>artist</i>
              </p>
              <p className="flex justify-center pb-5 text-center text-sm lg:pb-0">
                please contact me if this is your quote. I dont mean to steal
                it.
                <br /> I have looked but I couldn't find anything, so sorry.
              </p>
            </article>
            <article className="animate-[dropIn_1200ms_ease_500ms_backwards] lg:basis-1/2 lg:pl-5">
              <p className="pt-5 text-center text-xl lg:pt-0">
                Hello I'm Charli also known as Chookith. I am a junior front-end
                web developer based in Australia. In my youth, I took an
                interest in other languages and stumbled upon the variety of
                languages software development had to offer. So, for the last
                four years, I have been passionately coding as a hobby,
                constantly challenging myself and learning new technologies.
                This hobby has grown into a deep-seated passion, and after much
                consideration, I've decided to transition my hobby into a
                career. I am committed to furthering my skills and knowledge in
                web development and am excited about the opportunities this
                career path can offer.
              </p>
              <p className=" text-center text-xl">
                <br />
                My coding journey has been a thrilling one, marked by the
                acquisition of a versatile skill set. I began with Spanish and
                then ventured into Python and C#, before focusing on HTML and
                its frameworks, particularly React, Typescript, and Tailwind.
                Each new idea and concept I have sought to create has presented
                me with a unique blend of artistic and logical challenges, which
                I have come to deeply love and enjoy.
              </p>
              <p className="text-center text-xl">
                <br />
                For me, coding is not just a technical skill, but an art form.
                Every colour choice, button positioning, and font style are
                crucial elements in creating a visually appealing and functional
                website. This perspective, combined with my understanding of the
                business impact of web development, has allowed me to stay at
                the forefront of this ever-evolving domain, not just as a
                follower but as a creator.
              </p>
              <p className=" text-center text-xl">
                <br />
                After becoming proficient in web and AI development, I seek to
                alleviate the burden on the strained workforce. I plan to adapt
                and apply these skills to improve efficiency in the agricultural
                and healthcare industries.
              </p>
            </article>
          </div>
        </section>
        <section className="m-10 flex h-auto w-auto flex-col items-center justify-center text-center">
          <h1 className="mb-5 animate-[dropIn_1200ms_ease_300ms_backwards] text-center text-5xl">
            Projects
          </h1>
          <h2 className="mb-5 flex animate-[dropIn_1200ms_ease_400ms_backwards] items-center justify-center text-3xl">
            Completed
          </h2>
          <ul className="row-auto grid w-full grid-cols-1 flex-col items-center justify-center gap-5 lg:grid-cols-3">
            <li className="flex w-full animate-[dropIn_1200ms_ease_500ms_backwards] flex-col items-center justify-center rounded-3xl bg-sunlightYellow p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl dark:bg-goldMetallic dark:shadow-[#B89428] dark:hover:shadow-lg dark:hover:shadow-[#B89428]">
              <Link
                href="https://marketplace.visualstudio.com/items?itemName=Chookith.coffee-theme-dark"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full "
              >
                <h1 className="text-2xl">Late Night Mocha Theme</h1>
                <ul className="flex flex-row flex-wrap items-center justify-center px-5 xl:flex-row">
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    Color Theory
                  </li>
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    Vsce Api
                  </li>
                </ul>
                <p className="mt-5 px-5 pb-2 text-center">
                  Dark VSC Theme inspired by my one true love coffee.
                </p>
              </Link>
            </li>
            <li className="flex w-full animate-[dropIn_1200ms_ease_550ms_backwards] items-center justify-center rounded-3xl bg-sunlightYellow p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl dark:bg-goldMetallic dark:shadow-[#B89428] dark:hover:shadow-lg dark:hover:shadow-[#B89428]">
              <Link
                href="https://marketplace.visualstudio.com/items?itemName=Chookith.coffee-theme-light"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full"
              >
                <h1 className="text-2xl">Morning Coffee Theme</h1>
                <ul className="flex flex-row flex-wrap items-center justify-center px-5 xl:flex-row">
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    Color Theory
                  </li>
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    Vsce Api
                  </li>
                </ul>
                <p className="mt-5 px-5 pb-2 text-center">
                  Light counter part of Late Night Mocha
                </p>
              </Link>
            </li>
            <li className="flex w-full animate-[dropIn_1200ms_ease_600ms_backwards] items-center justify-center rounded-3xl bg-sunlightYellow p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl active:translate-y-1 dark:bg-goldMetallic dark:shadow-[#B89428] dark:hover:shadow-lg dark:hover:shadow-[#B89428]">
              <Link
                href="https://marketplace.visualstudio.com/items?itemName=Chookith.dark-fem-theme"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full"
              >
                <h1 className="text-2xl">Dark Fem Theme</h1>
                <ul className="flex flex-row flex-wrap items-center justify-center px-5 xl:flex-row">
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    Color Theory
                  </li>
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    Vsce Api
                  </li>
                </ul>
                <p className="mt-5 px-5 pb-2 text-center">
                  Dark VSC Theme inspired by the greek goddess Aphrodite
                </p>
              </Link>
            </li>
            <li className="flex w-full animate-[dropIn_1200ms_ease_650ms_backwards] flex-col items-center justify-center rounded-3xl bg-cream p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl active:translate-y-1 dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]">
              <Link
                href="https://todo-ii-chookiths-projects.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full"
              >
                <h1 className="text-2xl">Todo-ii App</h1>
                <ul className="flex flex-wrap items-center justify-center xl:flex-row">
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    React
                  </li>
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    TypeScript
                  </li>
                  <li className="mr-2 mt-2 rounded-full bg-teaGreen p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                    TailwindCSS
                  </li>
                </ul>
                <p className="mt-5 px-5 pb-2 text-center">
                  Small Todo list project
                </p>
              </Link>
            </li>
            <li className=" flex w-full animate-[dropIn_1200ms_ease_700ms_backwards] flex-col items-center justify-center rounded-3xl bg-cream p-5 shadow-md dark:bg-spaceCadet">
              <h1 className="text-2xl">Portfolio</h1>
              <ul className="flex  flex-wrap items-center justify-center xl:flex-row">
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  React
                </li>
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  NextJS
                </li>
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  CSS
                </li>
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  NodeJS
                </li>
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  TypeScript
                </li>
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  TailwindCSS
                </li>
              </ul>
              <p className="mt-5 px-5 pb-2 text-center">
                With the skills I've been refining, over the last 4 years, I've
                managed to come up with this.
              </p>
            </li>
            <li className="hidden w-full animate-[dropIn_1200ms_ease_750ms_backwards]  lg:flex"></li>
          </ul>
          <h2 className="mb-5 mt-10 flex animate-[dropIn_1200ms_ease_800ms_backwards] items-center justify-center text-3xl">
            In Progress
          </h2>
          <ul className="row-auto grid w-full grid-cols-1 flex-col items-center justify-center gap-5 lg:grid-cols-3">
            <li className="flex w-full animate-[dropIn_1200ms_ease_850ms_backwards] flex-col items-center justify-center rounded-3xl"></li>
            <li className=" flex  w-full animate-[dropIn_1200ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-summerGreen p-5 shadow-md dark:bg-olive">
              {" "}
              <h1 className="text-2xl">Pinterest Remake</h1>
              <ul className="flex  flex-wrap items-center justify-center xl:flex-row">
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  React
                </li>
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  TypeScript
                </li>
                <li className="mr-2 mt-2 rounded-full bg-teaGreen   p-3 shadow-lg dark:bg-mossGreen dark:shadow-md dark:shadow-[#545E31]">
                  TailwindCSS
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <footer className=" h-full  w-full rounded-2xl bg-ashBlue p-10 shadow-xl dark:bg-caribbeanCurrent">
          <h1 className="mb-5 animate-[dropIn_1200ms_ease_300ms_backwards] text-center text-5xl">
            Let's Get In Contact
          </h1>
          <article className=" flex w-full basis-1/2 flex-col lg:flex-row lg:divide-x lg:divide-y-0">
            <ul className="mb-5 grid basis-1/4 grid-cols-2 grid-rows-2 items-center justify-center gap-5 md:mr-5 lg:mb-0 lg:basis-1/2 xl:basis-1/4">
              <li>
                <Link
                  href="mailto:hello@chookith.com"
                  className="flex animate-[dropIn_1200ms_ease_350ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Chookith"
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" flex animate-[dropIn_1200ms_ease_400ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/chookith-f2dda3/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex animate-[dropIn_1200ms_ease_450ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/chookith001?igsh=am42MThmaGVvbmtr&utm_-source=qr"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex animate-[dropIn_1200ms_ease_500ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-lg dark:bg-spaceCadet dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B]"
                >
                  Instagram
                </Link>
              </li>
            </ul>

            <p className="flex basis-3/4 animate-[dropIn_1200ms_ease_600ms_backwards] items-center justify-start border-y py-10 text-center text-2xl lg:py-0 lg:pl-5">
              Feel free to get in touch! I'd love to get some freelance work{" "}
            </p>
          </article>
        </footer>
      </main>
    </Suspense>
  );
}
