"use client";
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
      <button
        onClick={handleScroll}
        className=" flex justify-end transition delay-75 hover:-translate-y-1"
      >
        Contact Me
      </button>
    );
  }
}
