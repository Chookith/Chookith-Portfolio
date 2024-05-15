"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";

export default function ThemeEnablerBtn() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
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
    <button
      onClick={() => darkModeHandler()}
      className="mr-5 transition delay-75 hover:-translate-y-1 active:translate-y-1"
    >
      {dark && <LightMode className="text-2xl" />}
      {!dark && <DarkMode className="text-2xl" />}
    </button>
  );
}
