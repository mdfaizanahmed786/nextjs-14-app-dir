export default function ProductRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const target=1;
  if(target===1) throw new Error("This is an error");
  // The error will not be caught if the layout and error are in the same segment, instead we need to move the error to the root level.
  return (
    <>
      {children}
      <p>
        This layout is common for product having each individual product id...
      </p>
    </>
  );
}
