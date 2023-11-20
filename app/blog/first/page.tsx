import React from "react";

import type { Metadata } from "next";

// the below segment will replace if any template is coming from the parent layout, only the child layout is going to get applied here...
export const metadata: Metadata = {
  title: {
    absolute: "First Page",
  },
};

function FirstPage() {
  return <div>FirstPage</div>;
}

export default FirstPage;
