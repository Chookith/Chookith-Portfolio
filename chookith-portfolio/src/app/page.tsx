import { Suspense } from "react";
import Image from "next/image";
import myPhoto from "./my-Photo.jpeg";

import Loading from "./loading";
import ErrorBoundary from "next/dist/client/components/error-boundary";
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <section className="overflow-y flex h-auto w-screen flex-col lg:h-screen lg:flex-row">
          <section className="flex-col items-center justify-center sm:basis-1/2">
            <h1 className="ml-10 mt-36 animate-dropIn items-center justify-center text-center text-5xl lg:ml-36">
              {" "}
              I am
            </h1>
            <h1 className="mt-7 animate-[dropIn2_1200ms_ease_400ms_backwards] items-center justify-center text-center text-7xl lg:ml-36">
              Chookith
            </h1>
            <div className="ml-10 flex animate-[dropIn_1200ms_ease_500ms_backwards] flex-row items-center justify-center py-7 lg:ml-36">
              <p className="mr-4 rounded-full bg-teagreen p-3 shadow-lg">
                React
              </p>
              <p className="mr-4  rounded-full bg-teagreen p-3 shadow-lg">
                Tailwind
              </p>
              <p className="mr-4 rounded-full bg-teagreen p-3 shadow-lg">
                TypeScript
              </p>
            </div>
            <p className="my-5 ml-10 animate-dropIn2  text-center lg:ml-36">
              I'm a Front End Developer based in <br /> Queensland, Australia
            </p>
          </section>
          <section className="flex items-center justify-center">
            <Image
              src={myPhoto}
              alt="smiling woman with green head wrap, glasses, and a black shirt"
              className="ml-10 mt-32 w-2/3 animate-[dropIn_1200ms_ease_700ms_backwards] rounded-3xl  lg:ml-36 lg:w-3/4 lg:basis-2/5"
            ></Image>
          </section>
        </section>
        <section className="h-screen w-screen flex-col ">
          <h1 className="pb-10 pl-5 text-center text-5xl">About Me</h1>
          <div className="flex flex-row divide-x divide-solid">
            <article className="mx-10 hidden flex-col items-center justify-center divide-x divide-solid lg:ml-36 lg:flex">
              <q className="rounded-full bg-ashblue p-16 text-4xl">
                I am a mosaic of everyone I have ever loved even for a heartbeat
              </q>
              <p>-viridianmasquerade</p>
            </article>
            <article className="mx-10 lg:ml-36">
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
      </main>
    </Suspense>
  );
}
