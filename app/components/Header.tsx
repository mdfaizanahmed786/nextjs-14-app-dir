import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-purple-500 w-full h-[58px] flex justify-between p-4">
      <Link href="/">
        <p>Header</p>
      </Link>
      <UserButton />
    </div>
  );
}
