"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const [value, setValue] = useState("");
  return (
    <div>
      <h1>Auth Layout</h1>
      {/* Below the input is used to demonstrate the state preserve between different pages ONLY IN LAYOUT.TSX not IN TEMPLATE.TSX */}
      <input
        value={value}
        className="text-green-500"
        onChange={(e) => setValue(e.target.value)}
      />
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

// Important: In layout.tsx file, the state remains unaffected when navigating to other pages, because layout will only observe which are not common, the common ones will not get affected. But what if you are wishing to perform some sideffects or some animations different on the pages?? so to solve this we can use template.tsx or tempalte.js file. but we need to avoid this file as much as possible, because it will be rendered on every page.

// Templates: They are also much similar to layout.tsx file and they accept children as props.
