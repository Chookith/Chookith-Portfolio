import { Suspense } from "react";
import Image from "next/image";
import myPhoto from "./my-Photo.jpeg";
import Loading from "./loading";
import Link from "next/link";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <section className="overflow-y flex h-auto w-auto flex-col xl:h-screen xl:flex-row">
          <section className="flex-col items-center justify-center sm:basis-1/2">
            <h1 className=" mt-36 animate-dropIn items-center justify-center text-center text-4xl sm:text-5xl xl:ml-36 xl:mt-52">
              {" "}
              I am
            </h1>
            <h1 className="mt-7 animate-[dropIn2_1200ms_ease_400ms_backwards] items-center justify-center text-center text-6xl sm:text-7xl xl:ml-36 xl:mt-36 xl:text-9xl">
              Chookith
            </h1>
            <div className=" flex animate-[dropIn_1200ms_ease_500ms_backwards] flex-row items-center justify-center py-7 xl:ml-36 xl:mt-20">
              <p className="mx-2 rounded-full bg-teagreen p-3 shadow-lg sm:mr-4">
                React
              </p>
              <p className="mx-2 rounded-full  bg-teagreen p-3 shadow-lg sm:mr-4">
                Tailwind
              </p>
              <p className="mx-2 rounded-full bg-teagreen p-3 shadow-lg sm:mr-4">
                TypeScript
              </p>
            </div>
            <p className="animate-dropIn2 items-center justify-center text-center xl:ml-36">
              I'm a Front End Developer based in <br /> Queensland, Australia
            </p>
          </section>
          <section className="flex w-auto items-center justify-center xl:w-5/12">
            <Image
              src={myPhoto}
              alt="smiling woman with green head wrap, glasses, and a black shirt"
              className="mt-20 w-1/2 animate-[dropIn_1200ms_ease_700ms_backwards] rounded-3xl lg:basis-1/2 xl:ml-36 xl:mt-16 xl:rounded-full"
            ></Image>
          </section>
        </section>
        <section className="h-auto w-auto flex-col ">
          <h1 className="mt-24 animate-[dropIn_1300ms_ease_600ms_backwards] pb-10 pl-5 text-center text-5xl">
            About Me
          </h1>
          <div className="flex animate-[dropIn_1300ms_ease_700ms_backwards] flex-row divide-none lg:divide-x lg:divide-solid">
            <article className="mx-10 hidden flex-col items-center justify-center lg:ml-36 lg:flex lg:basis-1/3">
              <q className="rounded-full bg-ashblue p-16 text-4xl">
                I am a mosaic of everyone I have ever loved even for a heartbeat
              </q>
              <p> viridianmasquerade</p>
            </article>
            <article className="mx-10 lg:ml-36 lg:basis-2/3">
              <p className=" pl-5 text-center text-xl">
                Hello I'm Charli also known as Chookith. I am a junior front-end
                web developer who is based in Australia. After an accidental
                bush with a websites devtools I needed to know what this
                language was. I have been coding as a hobby for 4 years now.
              </p>
              <p className="pl-5 text-center text-xl">
                <br />
                Over the past 2 years I have honed my skills and have become
                well rounded in TypeScript and React's framework. I appreciate
                the challenge of balancing creating beautiful designs and
                satisfying the needs and wants of stakeholders.
              </p>
              <p className="pl-5 text-center text-xl">
                <br />
                Art has always been a part of me, from the natural world to the
                screen. Although I have not had a formal education in art, I
                have been fortunate enough to surround myself with well-rounded
                people in both traditional and digital mediums.
              </p>
              <p className="pl-5 text-center text-xl">
                <br />
                Someday I plan to ease the strain of rural communities. More
                specifically agricultural advancements
              </p>
            </article>
          </div>
        </section>
        <section className="h-auto w-auto pb-52">
          <article className="mt-24 pb-10 text-center ">
            <h1 className=" animate-[dropIn_1200ms_ease_800ms_backwards] text-5xl">
              Projects
            </h1>
            <ul className="mx-10  flex flex-col items-start justify-center lg:flex-row">
              <li className="mt-10 flex  w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-cream p-5 shadow-xl transition delay-75 hover:-translate-y-1 lg:mx-5 lg:w-auto lg:basis-1/3">
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
                  <li className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                    MongoDB
                  </li>
                </ul>
                <p className="mx-5 mt-5 text-center">
                  With the skills I've been refining, over the last 4 years,
                  I've managed to come up with this.
                </p>
              </li>
              <li className="mt-10 flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-summergreen shadow-xl  transition  delay-75 hover:-translate-y-1 lg:mx-5 lg:w-auto lg:basis-1/3">
                <Link href="/">
                  <h1 className="px-5 pt-5 text-2xl">Weather App</h1>
                  <div className="flex flex-row flex-wrap items-center justify-center px-5 xl:flex-row">
                    <p className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      React
                    </p>
                    <p className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      TypeScript
                    </p>
                    <p className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      TailwindCSS
                    </p>
                    <p className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      Api
                    </p>
                  </div>
                  <p className="mx-5 mt-5 px-5 pb-5 text-center">
                    Work In Progress
                  </p>
                </Link>
              </li>
              <li className="mt-10 flex w-full animate-[dropIn_1300ms_ease_900ms_backwards] flex-col items-center justify-center rounded-3xl bg-sunlightyellow shadow-xl  transition delay-75 hover:-translate-y-1 lg:mx-5 lg:w-auto lg:basis-1/3">
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=Chookith.coffee-theme-dark"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full"
                >
                  <h1 className="px-5 pt-5 text-2xl">Late Night Mocha Theme</h1>
                  <div className="flex flex-row flex-wrap items-center justify-center px-5 xl:flex-row">
                    <p className="mr-2 mt-2 rounded-full bg-teagreen p-3 shadow-lg">
                      Color Theory
                    </p>
                  </div>
                  <p className="mx-5 mt-5 px-5 pb-5 text-center">
                    VSC Theme inspired by my one true love coffee.
                  </p>
                </Link>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </Suspense>
  );
}
