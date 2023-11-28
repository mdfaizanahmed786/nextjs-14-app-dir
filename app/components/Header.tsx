import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggler } from "./theme/ThemeToggler";

export default function Header() {
  return (
    <div className="bg-purple-500 w-full h-[58px] flex justify-between p-4">
      <Link href="/">
        <p>Header</p>
      </Link>
      {/* afterSignoutUrl tells us to not to leave the current page, redirect to the homepage to sign in... (Not the actual clerk page) */}
      <UserButton afterSignOutUrl="/" />

      {/* If below signed out then give us signIn button.. */}
      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
        <ThemeToggler />
      </div>
    </div>
  );
}
