import { Suspense } from "react";
import Image from "next/image";
import Loading from "./loading";
import Link from "next/link";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <section className="flex w-auto flex-col md:flex-row xl:h-screen">
          <section className="flex flex-col items-center justify-center md:ml-10 md:mt-16 md:basis-1/2 lg:mt-32 xl:h-auto">
            <h1 className="mt-5 animate-[dropIn2_1200ms_ease_300ms_backwards] items-center justify-center text-center text-4xl sm:mt-10 sm:text-5xl ">
              {" "}
              I am
            </h1>
            <h1 className="mt-7 animate-[dropIn2_1200ms_ease_400ms_backwards] items-center justify-center text-center text-6xl sm:text-7xl lg:mt-36 lg:text-8xl xl:text-9xl">
              Chookith
            </h1>
            <div className=" flex animate-[dropIn_1200ms_ease_500ms_backwards] flex-row items-center justify-center py-7 lg:mt-20">
              <p className="mx-2 animate-[bounce_2s_ease_700ms] rounded-full bg-teagreen p-3 shadow-lg sm:mr-4">
                React
              </p>
              <p className="mx-2 animate-[bounce_2s_ease_900ms] rounded-full bg-teagreen p-3 shadow-lg sm:mr-4">
                Tailwind
              </p>
              <p className="mx-2 animate-[bounce_2s_ease_1100ms] rounded-full bg-teagreen p-3 shadow-lg sm:mr-4">
                TypeScript
              </p>
            </div>
            <p className="animate-dropIn2 items-center justify-center text-center">
              I'm a Front End Developer based in <br /> Queensland, Australia
            </p>
          </section>
          <section className="flex items-center justify-center sm:basis-1/2">
            <Image
              src="/my-Photo.jpeg"
              width={700}
              height={500}
              alt="smiling woman with green head wrap, glasses, and a black shirt"
              className="mt-5 flex w-1/2 animate-[dropIn_1200ms_ease_700ms_backwards] items-center justify-center rounded-3xl md:mt-16 lg:mt-36  xl:mt-28 xl:rounded-full 2xl:mt-28"
            ></Image>
          </section>
        </section>
        <section className="mx-10 flex h-auto w-auto flex-col">
          <h1 className="mt-24 animate-[dropIn_1200ms_ease_800ms_backwards] pb-10 text-center text-5xl md:pl-5">
            About Me
          </h1>
          <div className="flex  flex-row items-center justify-center divide-none lg:divide-x lg:divide-solid">
            <article className="hidden animate-[dropIn_1200ms_ease_900ms_backwards] flex-col items-center justify-center lg:flex lg:basis-1/2 ">
              <q className="hidden">
                i. first there was light and then there were colors, and from
                the beginning we looked at the colors and we loved them, and we
                touched them, silk streaked veins and our rough hands dragging
                over these pieces of starlight
              </q>
              <q className="hidden">
                ii. little did we know we were made of stardust too.
              </q>
              <q className="hidden">
                iii. paint splattered hands and blank canvases, we are fragile
                things because we are taught there is no need for us anymore. No
                need for these benders of color, for these beautiful beings who
                filter these remnants of stars into tangible things.
              </q>
              <q className="hidden rounded-full bg-ashblue p-16 text-2xl xl:flex">
                iv. in our fragile worlds we build for ourselves great cities
                and towering portals that lead elsewhere, these brushes, these
                pens; they are our escape. They are the only way out from this
                harsh world of cigarettes and sleeping jets cradling iron
                bombshells. here in these worlds the colors are muted; they are
                soft and gentle like crushed violets, and most of all, they are
                safe
              </q>
              <q className="hidden rounded-full bg-ashblue p-16 text-2xl md:flex xl:hidden">
                v. but we are strong too. and in our soft bodies behind aprons
                and cloth and warm skin we harbor iron and steel and we will not
                be broken. because we are needed in this cruel world and we hold
                it together with words intertwined like spun sugar. because we
                looked at those colors and thought they can be more.
              </q>
              <q className="hidden">
                vi. we have constellations in our eyes and sunlight in our skin
              </q>

              <p>
                -unknown, <i>artist</i>
              </p>
              <p className="flex text-center">
                please contact me if this is your quote. I dont mean to steal
                it.
                <br /> I have looked but I couldn't find anything, so sorry.
              </p>
            </article>
            <article className="mx-10 animate-[dropIn_1200ms_ease_1000ms_backwards] lg:basis-1/2 lg:pl-12">
              <p className="text-center text-xl">
                Hello I'm Charli also known as Chookith. I am a junior front-end
                web developer who is based in Australia. After an accidental
                brush with a websites devtools I started learning the ins and
                outs of web developement. I have been coding as a hobby for 4
                years now.
              </p>
              <p className=" text-center text-xl">
                <br />
                Over the past 2 years I have honed my skills and have become
                well rounded in TypeScript and React. I appreciate the challenge
                of balancing creating beautiful user interfaces designs while
                creating a memorable user experiences.
              </p>
              <p className="text-center text-xl">
                <br />
                Art has always been a part of me, from the canvas to the screen.
                Although I have not had a formal education in art, I have been
                fortunate enough to surround myself with well-rounded people in
                both traditional and digital mediums.
              </p>
              <p className=" text-center text-xl">
                <br />
                Someday I plan to ease the strain of rural communities. More
                specifically agricultural advancements
              </p>
            </article>
          </div>
        </section>
        <section className="h-auto w-auto pb-36">
          <article className="mt-24 pb-10 text-center">
            <h1 className=" animate-[dropIn_1200ms_ease_1100ms_backwards] text-5xl">
              Projects
            </h1>
            <ul className="mx-10 flex flex-col items-center justify-center">
              <h2 className="my-5 flex animate-[dropIn_1200ms_ease_1300ms_backwards] items-center justify-center text-3xl">
                Completed
              </h2>
              <section
                id="themes"
                className=" flex h-full w-full flex-col items-center justify-center lg:flex-row"
              >
                <li className="mt-5 flex w-full animate-[dropIn_1200ms_ease_1400ms_backwards] flex-col items-center justify-center rounded-3xl bg-sunlightyellow p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl lg:mx-5 lg:basis-1/3">
                  <Link
                    href="https://marketplace.visualstudio.com/items?itemName=Chookith.coffee-theme-dark"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full "
                  >
                    <h1 className="text-2xl">Late Night Mocha Theme</h1>
                    <ul className="flex flex-row flex-wrap items-center justify-center px-5 xl:flex-row">
                      <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                        Color Theory
                      </li>
                      <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                        Acessability
                      </li>
                      <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                        Vsce Api
                      </li>
                    </ul>
                    <p className="mt-5 px-5 pb-2 text-center">
                      Dark VSC Theme inspired by my one true love coffee.
                    </p>
                  </Link>
                </li>
                <li className="mt-5 flex h-auto w-full animate-[dropIn_1200ms_ease_1450ms_backwards] flex-col items-center justify-center rounded-3xl bg-sunlightyellow p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl lg:mx-5  lg:basis-1/3">
                  <Link
                    href="https://marketplace.visualstudio.com/items?itemName=Chookith.coffee-theme-light"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full"
                  >
                    <h1 className="text-2xl">Morning Coffee Theme</h1>
                    <ul className="flex flex-row flex-wrap items-center justify-center px-5 xl:flex-row">
                      <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                        Color Theory
                      </li>
                      <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                        Vsce Api
                      </li>
                    </ul>
                    <p className="mt-5 px-5 pb-2 text-center">
                      Light counter part of Late Night Mocha
                    </p>
                  </Link>
                </li>
                <li className="mt-5 flex w-full animate-[dropIn_1200ms_ease_1500ms_backwards] flex-col items-center justify-center rounded-3xl bg-sunlightyellow p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl lg:mx-5 lg:basis-1/3">
                  <Link
                    href="https://marketplace.visualstudio.com/items?itemName=Chookith.dark-fem-theme"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full"
                  >
                    <h1 className="text-2xl">Dark Fem Theme</h1>
                    <ul className="flex flex-row flex-wrap items-center justify-center px-5 xl:flex-row">
                      <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                        Color Theory
                      </li>
                      <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                        Vsce Api
                      </li>
                    </ul>
                    <p className="mt-5 px-5 pb-2 text-center">
                      Dark VSC Theme inspired by the greek goddess Aphrodite
                    </p>
                  </Link>
                </li>
              </section>
              <section
                id="Line 2"
                className=" mt-10 flex w-full flex-col items-center justify-center lg:flex-row"
              >
                <li className="flex w-full basis-1/3 animate-[dropIn_1200ms_ease_1550ms_backwards] lg:mx-5"></li>
                <li className=" flex  w-full animate-[dropIn_1200ms_ease_1600ms_backwards] flex-col items-center justify-center rounded-3xl bg-cream p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl lg:mx-5 lg:w-auto lg:basis-1/3">
                  <h1 className="text-2xl">Portfolio</h1>
                  <ul className="flex  flex-wrap items-center justify-center xl:flex-row">
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      React
                    </li>
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      NextJS
                    </li>
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      CSS
                    </li>
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      NodeJS
                    </li>
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      TypeScript
                    </li>
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      TailwindCSS
                    </li>
                  </ul>
                  <p className="mt-5 px-5 pb-2 text-center">
                    With the skills I've been refining, over the last 4 years,
                    I've managed to come up with this.
                  </p>
                </li>
                <li className="flex w-full basis-1/3 animate-[dropIn_1200ms_ease_1600ms_backwards] lg:mx-5"></li>
              </section>
              <h2 className="mt-5 flex animate-[dropIn_1200ms_ease_1700ms_backwards] items-center justify-center text-3xl">
                In Progress
              </h2>
              <section
                id="Line 2"
                className=" flex w-full flex-col items-center justify-center lg:flex-row"
              >
                <li className="flex w-full basis-1/3 animate-[dropIn_1200ms_ease_1800ms_backwards] lg:mx-5"></li>
                <li className="mt-10 flex w-full animate-[dropIn_1200ms_ease_1850ms_backwards] flex-col items-center justify-center rounded-3xl bg-summergreen p-5 shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl lg:mx-5 lg:w-auto lg:basis-1/3">
                  <h1 className="text-2xl">Todo-ii App</h1>
                  <ul className="flex  flex-wrap items-center justify-center xl:flex-row">
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      React
                    </li>
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      TypeScript
                    </li>
                    <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      TailwindCSS
                    </li>
                  </ul>
                  <p className="mt-5 px-5 pb-2 text-center">Coming Soon</p>
                </li>
                <li className="flex w-full basis-1/3 animate-[dropIn_1200ms_ease_1900ms_backwards] lg:mx-5"></li>
              </section>
            </ul>
          </article>
        </section>
        <section className=" h-full w-full rounded-2xl bg-ashblue px-16 py-12 shadow-xl ">
          <h1 className="mt-5 animate-[dropIn_1200ms_ease_300ms_backwards] pb-10 text-center text-5xl lg:mt-5 lg:pl-5">
            Let's Get In Contact
          </h1>
          <article className=" flex basis-1/2 flex-col lg:flex-row lg:divide-x lg:divide-y-0">
            <div className="grid basis-1/4  grid-cols-2 grid-rows-2 items-center justify-center gap-2  xl:mr-5 ">
              <Link
                href="mailto:chookchook1@outlook.com"
                className="m-1 flex animate-[dropIn_1200ms_ease_350ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl"
              >
                Email
              </Link>
              <Link
                href="https://github.com/Chookith"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex animate-[dropIn_1200ms_ease_400ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl"
              >
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/chookith-f2dda3/"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex animate-[dropIn_1200ms_ease_450ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/chookith001?igsh=am42MThmaGVvbmtr&utm_-source=qr"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex animate-[dropIn_1200ms_ease_500ms_backwards] items-center rounded-full bg-cream p-5 text-center shadow-md transition delay-75 hover:-translate-y-1 hover:shadow-xl"
              >
                Instagram
              </Link>
            </div>

            <p className="mt-10 flex basis-1/2 animate-[dropIn_1200ms_ease_600ms_backwards] items-center justify-center border-y py-10 text-center text-2xl lg:ml-16 lg:py-0">
              Feel free to get in touch! I'd love to get some freelance work{" "}
            </p>
          </article>
        </section>
      </main>
    </Suspense>
  );
}
