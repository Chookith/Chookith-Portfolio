"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex h-screen w-screen flex-col items-center justify-center dark:bg-nyx dark:text-white">
        <h1 className="text-3xl">Um this is embarressing</h1>
        <h2 className="text-xl">Something went wrong</h2>
        <p className="mb-5 text-xl">-_-</p>
        <button className="mb-10 rounded-full bg-cream p-5 text-center shadow-lg transition delay-75 hover:-translate-y-1 hover:shadow-xl active:translate-y-1 active:shadow-lg dark:bg-spaceCadet dark:shadow-md dark:shadow-[#32304B] dark:hover:shadow-lg dark:hover:shadow-[#32304B] dark:active:shadow-md dark:active:shadow-[#32304B]">
          Retry
        </button>
      </body>
    </html>
  );
}
