"use client";
//I believe this can be used for errors on certain pages
//place it in the layouts parent segment to use it
//else the global-error page will be rendered when the time comes

import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div>
        <h2>aahh</h2>
        <p>Sorry...</p>
        <p>I think something went wrong</p>
        <p>this maybe: {error.message}</p>
        <p>Maybe... click the button?</p>
        <button onClick={() => reset()}> Try Again</button>
      </div>
    </>
  );
}
