import Link from "next/link";

/*
But due to a demand of "professionalism" i cannot have this page here.

be proud of all that you are 
It's the only thing we have left in this world 

may the curse of king midas consume the greedy
may this curse be a blessing to the poor

*/

export default function NotFound() {
  return (
    <>
      <div className="dark:bg-nyx flex h-screen w-screen flex-col items-center justify-center dark:text-white">
        <h1 className="text-7xl">404 error</h1>

        <p className="my-5 text-lg">
          I don't know how you got here or what you're trying to find...
        </p>
        <Link
          href="/"
          className="dark:bg-spaceCadet mb-10 rounded-full bg-cream p-5 text-center shadow-lg transition delay-75  hover:-translate-y-1 hover:shadow-xl dark:shadow-[#32304B]"
        >
          Go Home
        </Link>
        <div className="">
          <Link
            href="/PrettyQuotes"
            className=" dark:text-nyx  justify-end text-center text-white transition delay-75 hover:-translate-y-1"
          >
            Go to pretty quotes
          </Link>
        </div>
      </div>
    </>
  );
}
