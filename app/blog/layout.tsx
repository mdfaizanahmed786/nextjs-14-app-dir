import type { Metadata } from 'next'
 
// if the child pages are not provided with the title, then the fallback will have the title which is blog here
export const metadata: Metadata = {
  title: {
    default: 'Different Blog Side',
    template: "%s | Blog"
  },
}
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Blog Layout</h1>
      {children}
    </>
  );
}

// Importnat points to remember:

// title.template defined in layout.js will not apply to a title defined in a page.js of the same route segment.
// title.template defined in page.js has no effect because a page is always the terminating segment (it doesn't have any children route segments).