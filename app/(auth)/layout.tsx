"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const navLinks = [
    {
      label: "login",
      href: "/login",
    },
    {
      label: "register",
      href: "/register",
    },
    {
      label: "forgot password",
      href: "/forgot-password",
    },
  ];

  return (
    <div>
      <h1>Auth Layout</h1>
      {navLinks.map((link) => (
        <Link href={link.href} key={link.label}>
          {pathname.startsWith(link.href) ? (
            <div className="font-bold text-red-500">{link.label}</div>
          ) : (
            <div className="font-bold text-blue-500">{link.label}</div>
          )}
        </Link>
      ))}
      {children}
    </div>
  );
}
