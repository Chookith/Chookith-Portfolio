"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

function handleHomeBtn() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

export default function HomeButton() {
  const pathName = usePathname();

  return (
    <div className="flex basis-1/2 items-center justify-center sm:basis-10/12 sm:justify-start xl:basis-11/12 ">
      {pathName === "/" ? (
        <button
          onClick={handleHomeBtn}
          className=" transition delay-75 hover:-translate-y-1 active:translate-y-1"
        >
          Chookith
        </button>
      ) : (
        <Link
          href="/"
          className=" justify-start transition delay-75 hover:-translate-y-1 active:translate-y-1"
        >
          Chookith
        </Link>
      )}
    </div>
  );
}
