"use client";
import { Call } from "@mui/icons-material";
import { Component, ReactNode } from "react";
function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
}

export default class ContactMeBtn extends Component {
  render(): ReactNode {
    return (
      <div className="flex basis-1/2 items-center justify-center sm:basis-11/12">
        <button
          onClick={handleScroll}
          className="transition delay-75 hover:-translate-y-1 active:translate-y-1"
        >
          Contact Me
        </button>
      </div>
    );
  }
}
