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
      This is getting something messy here..
      <button onClick={reset}>Reset</button>.
    </div>
  );
}


// Take a look at Component heirarchy: (public folder, you will get to see more details)
// this error boundary will automatically catch any error that occurs in the children of this component
// add function to reset the error boundary