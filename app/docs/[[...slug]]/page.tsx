import React from "react";

// /docs/feature/concept this catch-all segment is represented by the slug array
// here feature and concept are dynamic segments
function DocsPage({
  params,
}: {
  params?: {
    slug?: string[];
  };
}) {
  if (params?.slug?.[0] === "feature" && params?.slug?.[1] === "concept") {
    return <div>Feature Concept</div>;
  } else if (params?.slug?.[0] === "feature" && params?.slug[1] === "api") {
    return <div>Feature API</div>;
  }

  return <div>DocsPage</div>;
}

export default DocsPage;

// when we route to /docs page it throws 404 page, to avoid that we need to add [[...slug]]
