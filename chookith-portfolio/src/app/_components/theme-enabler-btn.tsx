"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";

export default function ThemeEnablerBtn() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    localStorage.removeItem("theme");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function darkModeHandler() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div className="flex basis-1/2 items-center justify-center sm:mr-5 sm:basis-1/12 sm:justify-end">
      <button
        onClick={() => darkModeHandler()}
        className="  transition delay-75 hover:-translate-y-1 active:translate-y-1"
      >
        {dark && <LightMode className="text-2xl" />}
        {!dark && <DarkMode className="text-2xl" />}
      </button>
    </div>
  );
}
