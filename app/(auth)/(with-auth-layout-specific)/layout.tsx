// AuthLayout.tsx
// This layout is common for auth for email verify and reset password
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <p>This layout is common for auth for email verify and reset password</p>
    </>
  );
}
