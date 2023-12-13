"use client";
// The more deeper the error files will be more granular the error will be and will be easy to manage the errors. 
// This is the error boundary file for the review page.
// If the error is taken at the root level, it will be difficult to manage the errors. and it will propogate down as well.
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