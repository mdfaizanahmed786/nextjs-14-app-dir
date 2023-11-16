export default function ProductRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <p>
        This layout is common for product having each individual product id...
      </p>
    </>
  );
}
