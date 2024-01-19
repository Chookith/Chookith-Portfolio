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
      <body>
        <h2>Um this is embarressing</h2>
        <h2>-_-</h2>
        <button onClick={() => reset()}>Retry</button>
      </body>
    </html>
  );
}
