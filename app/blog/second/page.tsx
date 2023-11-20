import React from "react";
import type { Metadata } from "next";

// here the combined will be served: Second Page | Blog
export const metadata: Metadata = {
  title: "Second Page",
};

function SecondPage() {
  return <div>SecondPage</div>;
}

export default SecondPage;
