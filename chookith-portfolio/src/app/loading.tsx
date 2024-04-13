export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center">
      <h1 className="text-5xl">Loading</h1>
      <p className="animate-[bounce_2s_ease_100ms_infinite] text-5xl">.</p>
      <p className="animate-[bounce_2s_ease_300ms_infinite] text-5xl">.</p>
      <p className="animate-[bounce_2s_ease_500ms_infinite] text-5xl">.</p>
    </div>
  );
}
