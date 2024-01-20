import { Suspense } from "react";
import Image from "next/image";
import sunlightThroughForest from "./sunlight-through-the-forest.jpg";

import Loading from "./loading";
import ErrorBoundary from "next/dist/client/components/error-boundary";
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className=" flex h-screen w-screen snap-y snap-mandatory flex-col overflow-scroll">
        <div className="mt-36 flex flex-row">
          <div className="flex animate-dropIn items-center justify-center text-7xl">
            <h1>Software Engineer</h1>
          </div>
          <div className="flex animate-dropIn2 items-center justify-center text-lg">
            <p>
              I'm based in Queensland Australia <br /> hello
            </p>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
