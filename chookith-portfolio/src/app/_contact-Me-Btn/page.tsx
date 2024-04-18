"use client";
export default function ContactMeBtn() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      onClick={handleScroll}
      className=" flex justify-end transition delay-75 hover:-translate-y-1"
    >
      Contact Me
    </button>
  );
}
