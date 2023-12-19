import Link from "next/link";

export default function Notifications() {
  return (
    <div>
      Notifications
      <Link className="text-blue-500" href="/complex-dashboard/archived">Archived Notifications.</Link>
    </div>
  );
}
