"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error.message);

  return (
    <div>
      This cannot be caught by the layout page, take a look at image in public
      folde...
      <button onClick={reset}>Reset</button>.
    </div>
  );
}
